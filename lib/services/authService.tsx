import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import crypto from "crypto"
import { executeQuery, testStoredProcedure } from "../database/connection"
import type { User } from "../features/auth/authSlice"
import type { CreateUserParams, LoginParams, AuthResult } from "../types/auth"
import type {
    CreateUserResult,
    AuthenticateUserResult,
    ValidateRefreshTokenResult,
    GetUserProfileResult,
    UpdateUserProfileResult,
    ChangePasswordResult,
    CreatePasswordResetTokenResult,
} from "../types/database"
import { AuthenticationError, ConflictError, NotFoundError, DatabaseError, ErrorFactory } from "../types/errors"

// Define the expected payload type
interface RefreshTokenPayload {
    tokenId: string;
    userId: number;
}

const JWT_SECRET = process.env.JWT_SECRET
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET

export class AuthService {
    // Create new user with fixed result handling
    static async createUser(params: CreateUserParams): Promise<AuthResult> {
        try {
            const { name, email, password, avatar } = params

            console.log(name, email, password, avatar);
            console.log("🔄 Starting user creation process...")
            console.log("📝 User data:", { name, email, avatar: avatar ? "provided" : "null" })

            // Hash password
            const passwordHash = await bcrypt.hash(password, 12)
            console.log("🔐 Password hashed successfully")

            // Check if stored procedure exists
            const spExists = await testStoredProcedure("SP_CreateUser")
            if (!spExists) {
                console.error("❌ Stored procedure SP_CreateUser does not exist")
                throw ErrorFactory.database("Stored procedure SP_CreateUser not found", "SP_NOT_FOUND")
            }

            // Call stored procedure with proper result handling
            try {
                console.log("🧪 Calling stored procedure...")
                const directResult = await executeQuery(`CALL SP_CreateUser(?, ?, ?, ?)`, [
                    name,
                    email,
                    passwordHash,
                    avatar || null,
                ])

                console.log("✅ Direct query successful:", directResult)

                // MySQL stored procedures return results in a nested array structure
                // The actual result is in directResult[0][0]
                if (Array.isArray(directResult) && directResult.length > 0) {
                    // Get the first result set (the actual stored procedure result)
                    const resultSet = directResult[0]

                    if (Array.isArray(resultSet) && resultSet.length > 0) {
                        const result = resultSet[0] as CreateUserResult

                        console.log("📊 Parsed result:", result)

                        // Convert MySQL boolean (1/0) to JavaScript boolean
                        const success = result.success === 1 || result.success === true

                        if (!success) {
                            console.log("❌ Stored procedure returned failure:", result.message)
                            if (result.message === "User already exists") {
                                throw ErrorFactory.conflict(result.message, "USER_EXISTS")
                            }
                            throw ErrorFactory.database(result.message, "CREATE_USER_FAILED")
                        }

                        if (!result.user_id) {
                            console.log("❌ No user ID returned")
                            throw ErrorFactory.database("Failed to create user - no user ID returned", "USER_ID_NULL")
                        }

                        console.log("✅ User created with ID:", result.user_id)

                        // Get user data
                        const user = await this.getUserById(result.user_id)
                        if (!user) {
                            console.log("❌ Failed to retrieve created user")
                            throw ErrorFactory.database("Failed to retrieve user data", "USER_RETRIEVAL_FAILED")
                        }

                        console.log("✅ User data retrieved:", { id: user.id, email: user.email })

                        // Generate tokens
                        const { token, refreshToken } = await this.generateTokens(user, false)
                        console.log("✅ Tokens generated successfully")

                        // Log audit event
                        await this.logAuditEvent(result.user_id, "USER_CREATED", "users", {
                            email,
                            name,
                        })

                        console.log("✅ User creation completed successfully")

                        return {
                            success: true,
                            message: result.message,
                            user,
                            token,
                            refreshToken,
                        }
                    } else {
                        console.log("❌ Empty result set")
                        throw ErrorFactory.database("Empty result set from stored procedure", "EMPTY_RESULT_SET")
                    }
                } else {
                    console.log("❌ No results returned")
                    throw ErrorFactory.database("No result returned from stored procedure", "NO_RESULT")
                }
            } catch (directError: unknown) {
                console.error("❌ Direct query failed:", directError)

                // If it's already our custom error, re-throw it
                if (directError instanceof ConflictError || directError instanceof DatabaseError) {
                    throw directError
                }

                const dbError = directError as { code: string; message: string }

                // Handle specific MySQL errors
                if (dbError.code === "ER_SP_DOES_NOT_EXIST") {
                    throw ErrorFactory.database(
                        "Stored procedure SP_CreateUser does not exist. Please run the database setup scripts.",
                        "SP_MISSING",
                    )
                }

                if (dbError.code === "ER_SP_WRONG_NO_OF_ARGS") {
                    throw ErrorFactory.database(`Stored procedure parameter mismatch: ${dbError.message}`, "SP_PARAM_MISMATCH")
                }

                // Generic database error
                throw ErrorFactory.database(`Database operation failed: ${dbError.message}`, "DB_OPERATION_FAILED")
            }
        } catch (error) {
            console.error("❌ Create user error:", error)

            if (error instanceof ConflictError || error instanceof DatabaseError) {
                return {
                    success: false,
                    message: error.message,
                    error: {
                        message: error.message,
                        code: error.code,
                        statusCode: error.statusCode,
                    },
                }
            }

            return {
                success: false,
                message: "Internal server error",
                error: {
                    message: "Internal server error",
                    code: "INTERNAL_ERROR",
                    statusCode: 500,
                },
            }
        }
    }

    // Authenticate user with fixed result handling
    static async authenticateUser(params: LoginParams): Promise<AuthResult> {
        try {
            const { email, password, rememberMe = false, ipAddress, userAgent } = params

            console.log("🔄 Starting authentication process for:", email)

            // Call stored procedure to get user data
            const results = await executeQuery("CALL SP_AuthenticateUser(?)", [email])

            // Handle nested result structure
            const resultSet = Array.isArray(results) && results.length > 0 ? results[0] : null
            const userResult =
                Array.isArray(resultSet) && resultSet.length > 0 ? (resultSet[0] as AuthenticateUserResult) : null

            if (!userResult || !userResult.success || !userResult.user_id) {
                console.log("❌ User not found or authentication failed")
                throw ErrorFactory.authentication("Invalid credentials", "INVALID_CREDENTIALS")
            }

            console.log("✅ User found:", { id: userResult.user_id, email})

            // Check if account is locked
            if (userResult.locked_until && new Date(userResult.locked_until) > new Date()) {
                console.log("❌ Account is locked")
                throw ErrorFactory.authentication(
                    "Account temporarily locked due to too many failed attempts",
                    "ACCOUNT_LOCKED",
                )
            }

            // Verify password
            const isValidPassword = await bcrypt.compare(password, userResult.password_hash!)
            console.log("🔐 Password verification:", isValidPassword ? "✅ Valid" : "❌ Invalid")

            // Update login attempts
            await executeQuery("CALL SP_UpdateLoginAttempts(?, ?, ?)", [
                userResult.user_id,
                isValidPassword,
                ipAddress || null,
            ])

            if (!isValidPassword) {
                // Log failed login attempt
                await this.logAuditEvent(
                    userResult.user_id,
                    "LOGIN_FAILED",
                    "auth",
                    {
                        email,
                        ipAddress,
                        reason: "invalid_password",
                    },
                    ipAddress,
                    userAgent,
                )

                throw ErrorFactory.authentication("Invalid credentials", "INVALID_PASSWORD")
            }

            // Create user object
            const user: User = {
                id: userResult.user_id,
                name: userResult.name!,
                email,
                avatar: userResult.avatar || undefined,
                role: userResult.role!,
                emailVerified: userResult.email_verified!,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            }

            // Generate tokens
            const { token, refreshToken } = await this.generateTokens(user, rememberMe)

            // Log successful login
            await this.logAuditEvent(
                userResult.user_id,
                "LOGIN_SUCCESS",
                "auth",
                {
                    email,
                    ipAddress,
                    rememberMe,
                },
                ipAddress,
                userAgent,
            )

            console.log("✅ Authentication successful")

            return {
                success: true,
                message: "Login successful",
                user,
                token,
                refreshToken,
            }
        } catch (error) {
            console.error("❌ Authentication error:", error)

            if (error instanceof AuthenticationError) {
                return {
                    success: false,
                    message: error.message,
                    error: {
                        message: error.message,
                        code: error.code,
                        statusCode: error.statusCode,
                    },
                }
            }

            return {
                success: false,
                message: "Internal server error",
                error: {
                    message: "Internal server error",
                    code: "INTERNAL_ERROR",
                    statusCode: 500,
                },
            }
        }
    }

    // Generate JWT tokens
    static async generateTokens(
        user: User,
        rememberMe: boolean,
    ): Promise<{
        token: string
        refreshToken: string
    }> {
        const tokenExpiry = rememberMe ? "30d" : "1d"
        const refreshExpiry = rememberMe ? "90d" : "30d"

        // Generate access token
        const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET!, { expiresIn: tokenExpiry })

        // Generate refresh token
        const refreshTokenPayload = crypto.randomBytes(32).toString("hex")
        const refreshToken = jwt.sign({ tokenId: refreshTokenPayload, userId: user.id }, JWT_REFRESH_SECRET!, {
            expiresIn: refreshExpiry,
        })

        // Store refresh token in database
        const refreshTokenHash = crypto.createHash("sha256").update(refreshTokenPayload).digest("hex")

        const expiresAt = new Date()
        expiresAt.setDate(expiresAt.getDate() + (rememberMe ? 90 : 30))

        try {
            await executeQuery("CALL SP_CreateRefreshToken(?, ?, ?)", [user.id, refreshTokenHash, expiresAt])
        } catch {
            console.error("❌ Failed to store refresh token")
            // Don't fail the whole process for this
        }

        return { token, refreshToken }
    }

    // Refresh access token
    static async refreshAccessToken(refreshToken: string): Promise<AuthResult> {
        try {
            // Verify refresh token
            const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET!)
            // Validate the decoded token
            if (typeof decoded !== 'object' || !decoded || !('tokenId' in decoded) || !('userId' in decoded)) {
                throw ErrorFactory.authentication('Invalid refresh token payload', 'INVALID_TOKEN_PAYLOAD');
            }
            const { tokenId} = decoded as RefreshTokenPayload;

            // Hash token for database lookup
            const tokenHash = crypto.createHash("sha256").update(tokenId).digest("hex")

            // Validate refresh token in database
            const results = await executeQuery("CALL SP_ValidateRefreshToken(?)", [tokenHash])
            const resultSet = Array.isArray(results) && results.length > 0 ? results[0] : null
            const tokenResult =
                Array.isArray(resultSet) && resultSet.length > 0 ? (resultSet[0] as ValidateRefreshTokenResult) : null

            if (!tokenResult || !tokenResult.success || !tokenResult.user_id) {
                throw ErrorFactory.authentication(tokenResult?.message || "Invalid refresh token", "INVALID_REFRESH_TOKEN")
            }

            // Create user object
            const user: User = {
                id: tokenResult.user_id,
                name: tokenResult.user_name!,
                email: tokenResult.user_email!,
                avatar: tokenResult.user_avatar || undefined,
                role: tokenResult.user_role!,
                emailVerified: tokenResult.email_verified!,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            }

            // Generate new tokens
            const { token, refreshToken: newRefreshToken } = await this.generateTokens(user, true)

            // Revoke old refresh token
            await executeQuery("CALL SP_RevokeRefreshToken(?)", [tokenHash])

            return {
                success: true,
                message: "Token refreshed successfully",
                user,
                token,
                refreshToken: newRefreshToken,
            }
        } catch (error) {
            console.error("Refresh token error:", error)

            if (error instanceof AuthenticationError) {
                return {
                    success: false,
                    message: error.message,
                    error: {
                        message: error.message,
                        code: error.code,
                        statusCode: error.statusCode,
                    },
                }
            }

            return {
                success: false,
                message: "Invalid refresh token",
                error: {
                    message: "Invalid refresh token",
                    code: "INVALID_REFRESH_TOKEN",
                    statusCode: 401,
                },
            }
        }
    }

    // Get user by ID with fixed result handling
    static async getUserById(userId: number): Promise<User | null> {
        try {
            console.log("🔄 Getting user by ID:", userId)

            const results = await executeQuery("CALL SP_GetUserProfile(?)", [userId])
            const resultSet = Array.isArray(results) && results.length > 0 ? results[0] : null
            const userResult =
                Array.isArray(resultSet) && resultSet.length > 0 ? (resultSet[0] as GetUserProfileResult) : null

            if (!userResult || !userResult.success) {
                console.log("❌ User not found or query failed")
                return null
            }

            console.log("✅ User profile retrieved")

            return {
                id: userId,
                name: userResult.name!,
                email: userResult.email!,
                avatar: userResult.avatar || undefined,
                role: userResult.role!,
                emailVerified: userResult.email_verified!,
                createdAt: userResult.created_at!.toISOString(),
                updatedAt: userResult.updated_at!.toISOString(),
            }
        } catch {
            console.error("❌ Get user error")
            return null
        }
    }

    // Update user profile
    static async updateUserProfile(
        userId: number,
        updates: { name?: string; email?: string; avatar?: string },
    ): Promise<AuthResult> {
        try {
            const currentUser = await this.getUserById(userId)
            if (!currentUser) {
                throw ErrorFactory.notFound("User not found", "USER_NOT_FOUND")
            }

            const results = await executeQuery("CALL SP_UpdateUserProfile(?, ?, ?, ?)", [
                userId,
                updates.name || currentUser.name,
                updates.email || currentUser.email,
                updates.avatar || currentUser.avatar || null,
            ])

            const resultSet = Array.isArray(results) && results.length > 0 ? results[0] : null
            const updateResult =
                Array.isArray(resultSet) && resultSet.length > 0 ? (resultSet[0] as UpdateUserProfileResult) : null

            if (!updateResult || !updateResult.success) {
                const message = updateResult?.message || "Update failed"
                if (message === "Email already taken") {
                    throw ErrorFactory.conflict(message, "EMAIL_TAKEN")
                }
                throw ErrorFactory.database(message, "UPDATE_PROFILE_FAILED")
            }

            // Get updated user data
            const updatedUser = await this.getUserById(userId)
            if (!updatedUser) {
                throw ErrorFactory.database("Failed to retrieve updated user data", "USER_RETRIEVAL_FAILED")
            }

            // Log audit event
            await this.logAuditEvent(userId, "PROFILE_UPDATED", "users", updates)

            return {
                success: true,
                message: updateResult.message,
                user: updatedUser,
            }
        } catch (error) {
            console.error("Update profile error:", error)

            if (error instanceof NotFoundError || error instanceof ConflictError || error instanceof DatabaseError) {
                return {
                    success: false,
                    message: error.message,
                    error: {
                        message: error.message,
                        code: error.code,
                        statusCode: error.statusCode,
                    },
                }
            }

            return {
                success: false,
                message: "Internal server error",
                error: {
                    message: "Internal server error",
                    code: "INTERNAL_ERROR",
                    statusCode: 500,
                },
            }
        }
    }

    // Change password
    static async changePassword(userId: number, currentPassword: string, newPassword: string): Promise<AuthResult> {
        try {
            // Get current user
            const user = await this.getUserById(userId)
            if (!user) {
                throw ErrorFactory.notFound("User not found", "USER_NOT_FOUND")
            }

            // Get current password hash
            const authResults = await executeQuery("CALL SP_AuthenticateUser(?)", [user.email])
            const resultSet = Array.isArray(authResults) && authResults.length > 0 ? authResults[0] : null
            const authResult =
                Array.isArray(resultSet) && resultSet.length > 0 ? (resultSet[0] as AuthenticateUserResult) : null

            if (!authResult || !authResult.success || !authResult.password_hash) {
                throw ErrorFactory.notFound("User not found", "USER_NOT_FOUND")
            }

            // Verify current password
            const isValidPassword = await bcrypt.compare(currentPassword, authResult.password_hash)
            if (!isValidPassword) {
                throw ErrorFactory.authentication("Current password is incorrect", "INVALID_CURRENT_PASSWORD")
            }

            // Hash new password
            const newPasswordHash = await bcrypt.hash(newPassword, 12)

            // Update password
            const results = await executeQuery("CALL SP_ChangePassword(?, ?)", [userId, newPasswordHash])
            const changeResultSet = Array.isArray(results) && results.length > 0 ? results[0] : null
            const changeResult =
                Array.isArray(changeResultSet) && changeResultSet.length > 0
                    ? (changeResultSet[0] as ChangePasswordResult)
                    : null

            if (!changeResult || !changeResult.success) {
                throw ErrorFactory.database(changeResult?.message || "Password change failed", "CHANGE_PASSWORD_FAILED")
            }

            // Log audit event
            await this.logAuditEvent(userId, "PASSWORD_CHANGED", "users", {})

            return {
                success: true,
                message: changeResult.message,
            }
        } catch (error) {
            console.error("Change password error:", error)

            if (error instanceof NotFoundError || error instanceof AuthenticationError || error instanceof DatabaseError) {
                return {
                    success: false,
                    message: error.message,
                    error: {
                        message: error.message,
                        code: error.code,
                        statusCode: error.statusCode,
                    },
                }
            }

            return {
                success: false,
                message: "Internal server error",
                error: {
                    message: "Internal server error",
                    code: "INTERNAL_ERROR",
                    statusCode: 500,
                },
            }
        }
    }

    // Create password reset token
    static async createPasswordResetToken(email: string): Promise<AuthResult> {
        try {
            const resetToken = crypto.randomBytes(32).toString("hex")
            const expiresAt = new Date()
            expiresAt.setHours(expiresAt.getHours() + 1) // 1 hour expiry

            const results = await executeQuery("CALL SP_CreatePasswordResetToken(?, ?, ?)", [email, resetToken, expiresAt])
            const resultSet = Array.isArray(results) && results.length > 0 ? results[0] : null
            const resetResult =
                Array.isArray(resultSet) && resultSet.length > 0 ? (resultSet[0] as CreatePasswordResetTokenResult) : null

            if (resetResult?.success) {
                // Log audit event
                await this.logAuditEvent(null, "PASSWORD_RESET_REQUESTED", "users", { email })

                // In a real app, send email with reset token here
                console.log(`Password reset token for ${email}: ${resetToken}`)
            }

            return {
                success: true, // Always return success for security
                message: "If an account with that email exists, we have sent a password reset link.",
            }
        } catch {
            console.error("Password reset error")
            return {
                success: false,
                message: "Internal server error",
                error: {
                    message: "Internal server error",
                    code: "INTERNAL_ERROR",
                    statusCode: 500,
                },
            }
        }
    }

    // Log audit event
    static async logAuditEvent(
        userId: number | null,
        action: string,
        resource: string,
        details: Record<string, unknown> = {},
        ipAddress?: string,
        userAgent?: string,
    ): Promise<void> {
        try {
            await executeQuery("CALL SP_LogAuditEvent(?, ?, ?, ?, ?, ?)", [
                userId,
                action,
                resource,
                JSON.stringify(details),
                ipAddress || null,
                userAgent || null,
            ])
        } catch {
            // Don't throw errors for audit logging
            console.error("Audit log error")
        }
    }

    // Logout user (revoke refresh token)
    static async logoutUser(refreshToken: string, userId?: string): Promise<AuthResult> {
        try {
            if (refreshToken) {
                const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET!)

                    // / Validate the decoded token
                if (!decoded || typeof decoded !== 'object' || !('tokenId' in decoded) || !('userId' in decoded)) {
                    throw ErrorFactory.authentication('Invalid refresh token payload', 'INVALID_TOKEN_PAYLOAD');
                }
                
                const tokenHash = crypto.createHash("sha256").update(decoded.tokenId).digest("hex")

                await executeQuery("CALL SP_RevokeRefreshToken(?)", [tokenHash])
            }

            // Log audit event
            if (userId) {
                await this.logAuditEvent(Number(userId), "LOGOUT", "auth", {})
            }

            return { success: true, message: "Logged out successfully" }
        } catch {
            console.error("Logout error")
            return { success: true, message: "Logged out successfully" } // Always succeed
        }
    }
}
