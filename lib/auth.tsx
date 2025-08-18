// Authentication utilities and types

export interface User {
    id: string
    name: string
    email: string
    avatar?: string
    createdAt: Date
}

export interface AuthState {
    user: User | null
    isLoading: boolean
    isAuthenticated: boolean
}

export interface LoginCredentials {
    email: string
    password: string
}

export interface SignupCredentials {
    name: string
    email: string
    password: string
}

// Mock authentication functions (replace with real API calls)
export const authService = {
    async login(credentials: LoginCredentials): Promise<User> {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock validation
        if (credentials.email === "demo@helyx.com" && credentials.password === "password") {
            return {
                id: "1",
                name: "Demo User",
                email: credentials.email,
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
                createdAt: new Date(),
            }
        }

        throw new Error("Invalid credentials")
    },

    async signup(credentials: SignupCredentials): Promise<User> {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock user creation
        return {
            id: Math.random().toString(36).substr(2, 9),
            name: credentials.name,
            email: credentials.email,
            createdAt: new Date(),
        }
    },

    async logout(): Promise<void> {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500))
    },

    async getCurrentUser(): Promise<User | null> {
        // Simulate checking for existing session
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Return null if no session exists
        return null
    },

    async resetPassword(email: string): Promise<void> {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(`Password reset email sent to ${email}`)
    },
}

// Validation utilities
export const validateEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email)
}

export const validatePassword = (
    password: string,
): {
    isValid: boolean
    errors: string[]
} => {
    const errors: string[] = []

    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long")
    }

    if (!/(?=.*[a-z])/.test(password)) {
        errors.push("Password must contain at least one lowercase letter")
    }

    if (!/(?=.*[A-Z])/.test(password)) {
        errors.push("Password must contain at least one uppercase letter")
    }

    if (!/(?=.*\d)/.test(password)) {
        errors.push("Password must contain at least one number")
    }

    return {
        isValid: errors.length === 0,
        errors,
    }
}
