// Application user type (different from database user)
export interface User {
    id: number // Changed from string to number
    name: string
    email: string
    avatar?: string
    role: "user" | "admin"
    emailVerified: boolean
    createdAt: string
    updatedAt: string
}

export interface AuthState {
    user: User | null
    token: string | null
    refreshToken: string | null
    isAuthenticated: boolean
    isLoading: boolean
}

// Request/Response types
export interface LoginRequest {
    email: string
    password: string
    rememberMe?: boolean
}

export interface SignupRequest {
    name: string
    email: string
    password: string
    confirmPassword: string
    avatar?: string
}

export interface AuthResponse {
    user: User
    token: string
    refreshToken: string
    message: string
}

export interface UpdateProfileRequest {
    name?: string
    email?: string
    avatar?: string
}

export interface ChangePasswordRequest {
    currentPassword: string
    newPassword: string
    confirmPassword: string
}

export interface ResetPasswordRequest {
    email: string
}

// Error types
export interface AuthError {
    message: string
    code: string
    statusCode: number
    errors?: Record<string, string[]>
}

export interface DatabaseError extends Error {
    code: string
    errno: number
    sqlState: string
    sqlMessage: string
}

// Service parameter types
export interface CreateUserParams {
    name: string
    email: string
    password: string
    avatar?: string
}

export interface LoginParams {
    email: string
    password: string
    rememberMe?: boolean
    ipAddress?: string
    userAgent?: string
}

// Service result types
export interface AuthResult {
    success: boolean
    message: string
    user?: User
    token?: string
    refreshToken?: string
    error?: AuthError
}

export interface ServiceResult<T = unknown> {
    success: boolean
    message: string
    data?: T
    error?: AuthError
}
