// Custom error classes with proper TypeScript typing
export class AuthenticationError extends Error {
    public readonly code: string
    public readonly statusCode: number
    public readonly errors?: Record<string, string[]>

    constructor(message: string, code = "AUTH_ERROR", statusCode = 401, errors?: Record<string, string[]>) {
        super(message)
        this.name = "AuthenticationError"
        this.code = code
        this.statusCode = statusCode
        this.errors = errors

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AuthenticationError)
        }
    }
}

export class ValidationError extends Error {
    public readonly code: string
    public readonly statusCode: number
    public readonly errors: Record<string, string[]>

    constructor(message: string, errors: Record<string, string[]>, code = "VALIDATION_ERROR", statusCode = 400) {
        super(message)
        this.name = "ValidationError"
        this.code = code
        this.statusCode = statusCode
        this.errors = errors

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ValidationError)
        }
    }
}

export class DatabaseError extends Error {
    public readonly code: string
    public readonly statusCode: number
    public readonly sqlState?: string
    public readonly errno?: number

    constructor(message: string, code = "DATABASE_ERROR", statusCode = 500, sqlState?: string, errno?: number) {
        super(message)
        this.name = "DatabaseError"
        this.code = code
        this.statusCode = statusCode
        this.sqlState = sqlState
        this.errno = errno

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DatabaseError)
        }
    }
}

export class NotFoundError extends Error {
    public readonly code: string
    public readonly statusCode: number

    constructor(message = "Resource not found", code = "NOT_FOUND", statusCode = 404) {
        super(message)
        this.name = "NotFoundError"
        this.code = code
        this.statusCode = statusCode

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotFoundError)
        }
    }
}

export class ConflictError extends Error {
    public readonly code: string
    public readonly statusCode: number

    constructor(message: string, code = "CONFLICT", statusCode = 409) {
        super(message)
        this.name = "ConflictError"
        this.code = code
        this.statusCode = statusCode

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ConflictError)
        }
    }
}

export class RateLimitError extends Error {
    public readonly code: string
    public readonly statusCode: number
    public readonly retryAfter?: number

    constructor(message = "Too many requests", code = "RATE_LIMIT", statusCode = 429, retryAfter?: number) {
        super(message)
        this.name = "RateLimitError"
        this.code = code
        this.statusCode = statusCode
        this.retryAfter = retryAfter

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, RateLimitError)
        }
    }
}

// Error response type for API
export interface ErrorResponse {
    message: string
    code: string
    statusCode: number
    errors?: Record<string, string[]>
    timestamp: string
    path?: string
}

// Type guard functions
export function isAuthenticationError(error: unknown): error is AuthenticationError {
    return error instanceof AuthenticationError
}

export function isValidationError(error: unknown): error is ValidationError {
    return error instanceof ValidationError
}

export function isDatabaseError(error: unknown): error is DatabaseError {
    return error instanceof DatabaseError
}

export function isNotFoundError(error: unknown): error is NotFoundError {
    return error instanceof NotFoundError
}

export function isConflictError(error: unknown): error is ConflictError {
    return error instanceof ConflictError
}

export function isRateLimitError(error: unknown): error is RateLimitError {
    return error instanceof RateLimitError
}

// Error factory functions
export const ErrorFactory = {
    authentication: (message: string, code?: string, errors?: Record<string, string[]>) =>
        new AuthenticationError(message, code, 401, errors),

    validation: (message: string, errors: Record<string, string[]>, code?: string) =>
        new ValidationError(message, errors, code),

    database: (message: string, code?: string, sqlState?: string, errno?: number) =>
        new DatabaseError(message, code, 500, sqlState, errno),

    notFound: (message?: string, code?: string) => new NotFoundError(message, code),

    conflict: (message: string, code?: string) => new ConflictError(message, code),

    rateLimit: (message?: string, code?: string, retryAfter?: number) =>
        new RateLimitError(message, code, 429, retryAfter),
}
