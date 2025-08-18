import { NextResponse } from "next/server"
import { testConnection, executeQuery, testStoredProcedure } from "@/lib/database/connection"

interface DatabaseError {
    message: string
    code?: string
    errno?: number
    sqlState?: string
}

export async function GET() {
    try {
        console.log("🧪 Starting database tests...")

        // Test 1: Basic connection
        const connectionTest = await testConnection()
        console.log(`Connection test: ${connectionTest ? "✅ PASS" : "❌ FAIL"}`)

        // Test 2: Simple query
        let queryTest = false
        try {
            const result = await executeQuery("SELECT 1 as test, NOW() as current_time")
            queryTest = result.length > 0
            console.log(`Query test: ${queryTest ? "✅ PASS" : "❌ FAIL"}`)
            console.log("Query result:", result)
        } catch (queryError) {
            console.log("❌ Query test FAILED:", queryError)
        }

        // Test 3: Check if database exists
        let dbTest = false
        try {
            const result = await executeQuery("SELECT DATABASE() as current_db")
            dbTest = result.length > 0
            console.log(`Database test: ${dbTest ? "✅ PASS" : "❌ FAIL"}`)
            console.log("Current database:", result)
        } catch (dbError) {
            console.log("❌ Database test FAILED:", dbError)
        }

        // Test 4: Check if users table exists
        let tableTest = false
        try {
            const result = await executeQuery(`
        SELECT COUNT(*) as count 
        FROM information_schema.tables 
        WHERE table_schema = DATABASE() AND table_name = 'users'
      `)
            tableTest = result[0]?.count > 0
            console.log(`Users table test: ${tableTest ? "✅ PASS" : "❌ FAIL"}`)
        } catch (tableError) {
            console.log("❌ Users table test FAILED:", tableError)
        }

        // Test 5: Check if stored procedure exists
        const spTest = await testStoredProcedure("SP_CreateUser")
        console.log(`Stored procedure test: ${spTest ? "✅ PASS" : "❌ FAIL"}`)

        // Test 6: Try to call stored procedure with minimal params
        let spCallTest = false
        let spError: DatabaseError | null = null
        try {
            const result = await executeQuery(`
        CALL SP_CreateUser('Test User', 'test@example.com', 'hashedpassword', NULL)
      `)
            spCallTest = true
            console.log("✅ Stored procedure call test PASSED")
            console.log("SP result:", result)
        } catch (spCallError) {
            console.log("❌ Stored procedure call test FAILED:", spCallError)
            const error = spCallError as DatabaseError
            spError = {
                message: error.message,
                code: error.code,
                errno: error.errno,
                sqlState: error.sqlState,
            }
        }

        return NextResponse.json({
            tests: {
                connection: connectionTest,
                query: queryTest,
                database: dbTest,
                table: tableTest,
                storedProcedure: spTest,
                storedProcedureCall: spCallTest,
            },
            errors: {
                storedProcedureCall: spError,
            },
            message: "Database tests completed",
        })
    } catch (testError) {
        console.error("❌ Database test error:", testError)
        const error = testError as DatabaseError
        return NextResponse.json(
            {
                error: {
                    message: error.message,
                    code: error.code,
                    errno: error.errno,
                    sqlState: error.sqlState,
                },
            },
            { status: 500 },
        )
    }
}
