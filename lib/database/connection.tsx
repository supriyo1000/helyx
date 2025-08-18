import mysql from "mysql2/promise"
import type { RowDataPacket } from "mysql2/promise"
import { DatabaseError } from "../types/errors"

// Database configuration
const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    port: Number.parseInt(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "heroui_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: "utf8mb4",
    timezone: "+00:00",
}

// Create connection pool
const pool = mysql.createPool(dbConfig)

// Test connection
export async function testConnection(): Promise<boolean> {
    try {
        const connection = await pool.getConnection()
        console.log("✅ Database connected successfully")
        connection.release()
        return true
    } catch {
        console.error("❌ Database connection failed")
        return false
    }
}

// Execute stored procedure with better error handling
export async function callStoredProcedure<T = RowDataPacket[]>(
    procedureName: string,
    params: unknown[] = [],
): Promise<T> {
    const connection = await pool.getConnection()
    try {
        console.log(`🔄 Calling stored procedure: ${procedureName}`)
        console.log(`📝 Parameters:`, params)

        const placeholders = params.map(() => "?").join(", ")
        const query = `CALL ${procedureName}(${placeholders})`

        console.log(`📋 Query: ${query}`)

        const [results] = await connection.execute<RowDataPacket[]>(query, params)

        console.log(`✅ Stored procedure ${procedureName} executed successfully`)
        console.log(`📊 Results:`, results)

        return results as T
    } catch (error: unknown) {
        const dbError = error as {
            message: string
            code: string
            errno: number
            sqlState: string
            sqlMessage: string
            sql: string
        }

        console.error(`❌ Error calling stored procedure ${procedureName}:`, {
            message: dbError.message,
            code: dbError.code,
            errno: dbError.errno,
            sqlState: dbError.sqlState,
            sqlMessage: dbError.sqlMessage,
            sql: dbError.sql,
        })

        throw new DatabaseError(
            `Failed to execute stored procedure: ${procedureName} - ${dbError.message}`,
            "STORED_PROCEDURE_ERROR",
            500,
            dbError.sqlState,
            dbError.errno,
        )
    } finally {
        connection.release()
    }
}

// Execute query with proper typing
export async function executeQuery<T = RowDataPacket[]>(query: string, params: unknown[] = []): Promise<T> {
    const connection = await pool.getConnection()
    try {
        console.log(`🔄 Executing query: ${query}`)
        console.log(`📝 Parameters:`, params)

        const [results] = await connection.execute<RowDataPacket[]>(query, params)

        console.log(`✅ Query executed successfully`)
        console.log(`📊 Results:`, results)

        return results as T
    } catch (error: unknown) {
        const dbError = error as {
            message: string
            code: string
            errno: number
            sqlState: string
            sqlMessage: string
            sql: string
        }

        console.error("❌ Error executing query:", {
            message: dbError.message,
            code: dbError.code,
            errno: dbError.errno,
            sqlState: dbError.sqlState,
            sqlMessage: dbError.sqlMessage,
            sql: dbError.sql,
        })

        throw new DatabaseError(
            `Failed to execute query - ${dbError.message}`,
            "QUERY_ERROR",
            500,
            dbError.sqlState,
            dbError.errno,
        )
    } finally {
        connection.release()
    }
}

// Get single result from stored procedure
export async function callStoredProcedureOne<T = RowDataPacket>(
    procedureName: string,
    params: unknown[] = [],
): Promise<T | null> {
    const results = await callStoredProcedure<RowDataPacket[]>(procedureName, params)
    return Array.isArray(results) && results.length > 0 ? (results[0] as T) : null
}

// Execute transaction
export async function executeTransaction<T>(callback: (connection: mysql.Connection) => Promise<T>): Promise<T> {
    const connection = await pool.getConnection()
    try {
        await connection.beginTransaction()
        const result = await callback(connection)
        await connection.commit()
        return result
    } catch (error: unknown) {
        await connection.rollback()
        const dbError = error as { sqlState: string; errno: number }
        throw new DatabaseError("Transaction failed", "TRANSACTION_ERROR", 500, dbError.sqlState, dbError.errno)
    } finally {
        connection.release()
    }
}

// Health check
export async function healthCheck(): Promise<{
    status: "healthy" | "unhealthy"
    connections: {
        total: number
        active: number
        idle: number
    }
    uptime: number
}> {
    try {
        const startTime = Date.now()
        await executeQuery("SELECT 1 as health_check")
        const responseTime = Date.now() - startTime

        return {
            status: "healthy",
            connections: {
                total: pool.pool.config.connectionLimit,
                active: pool.pool.allConnections.length - pool.pool.freeConnections.length,
                idle: pool.pool.freeConnections.length,
            },
            uptime: responseTime,
        }
    } catch {
        return {
            status: "unhealthy",
            connections: {
                total: 0,
                active: 0,
                idle: 0,
            },
            uptime: 0,
        }
    }
}

// Test if stored procedure exists
export async function testStoredProcedure(procedureName: string): Promise<boolean> {
    try {
        const query = `
      SELECT COUNT(*) as count 
      FROM information_schema.ROUTINES 
      WHERE ROUTINE_SCHEMA = ? AND ROUTINE_NAME = ? AND ROUTINE_TYPE = 'PROCEDURE'
    `
        const results = await executeQuery<RowDataPacket[]>(query, [dbConfig.database, procedureName])
        const count = results[0]?.count || 0

        console.log(`🔍 Stored procedure ${procedureName} exists: ${count > 0}`)
        return count > 0
    } catch {
        console.error(`❌ Error checking stored procedure ${procedureName}`)
        return false
    }
}

export default pool
