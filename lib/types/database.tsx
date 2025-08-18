// Database result types for stored procedures
export interface DatabaseResult {
    success: boolean
    message: string
}

// Stored procedure result types
export interface CreateUserResult {
    user_id: number | null
    success: boolean | number
    message: string
}

export interface AuthenticateUserResult {
    user_id: number | null
    name: string | null
    password_hash: string | null
    avatar: string | null
    role: "user" | "admin" | null
    email_verified: boolean | null
    login_attempts: number | null
    locked_until: Date | null
    success: boolean
    message: string
}

export interface CreateRefreshTokenResult {
    token_id: number | null
    success: boolean
    message: string
}

export interface ValidateRefreshTokenResult {
    user_id: number | null
    user_name: string | null
    user_email: string | null
    user_avatar: string | null
    user_role: "user" | "admin" | null
    email_verified: boolean | null
    success: boolean
    message: string
}

export interface GetUserProfileResult {
    name: string | null
    email: string | null
    avatar: string | null
    role: "user" | "admin" | null
    email_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
    success: boolean
    message: string
}

export interface UpdateUserProfileResult {
    success: boolean
    message: string
}

export interface ChangePasswordResult {
    success: boolean
    message: string
}

export interface CreatePasswordResetTokenResult {
    success: boolean
    message: string
}

export interface RevokeRefreshTokenResult {
    success: boolean
    message: string
}

export interface UpdateLoginAttemptsResult {
    success: boolean
    message: string
}

// Database entity types
export interface DatabaseUser {
    id: number
    name: string
    email: string
    password_hash: string
    avatar: string | null
    role: "user" | "admin"
    email_verified: boolean
    email_verification_token: string | null
    email_verification_expires: Date | null
    password_reset_token: string | null
    password_reset_expires: Date | null
    last_login: Date | null
    login_attempts: number
    locked_until: Date | null
    created_at: Date
    updated_at: Date
}

export interface DatabaseRefreshToken {
    id: number
    user_id: number
    token_hash: string
    expires_at: Date
    created_at: Date
}

export interface DatabaseUserSession {
    id: number
    user_id: number
    session_token: string
    ip_address: string | null
    user_agent: string | null
    expires_at: Date
    created_at: Date
}

export interface DatabaseAuditLog {
    id: number
    user_id: number | null
    action: string
    resource: string | null
    details: Record<string, unknown> | null
    ip_address: string | null
    user_agent: string | null
    created_at: Date
}
