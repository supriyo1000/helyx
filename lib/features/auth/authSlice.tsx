import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import {
    storeAuthData,
    getStoredAuthData,
    clearStoredAuthData,
    storeSessionData,
    clearSessionData,
    isSessionValid,
    initializeSessionTracker,
    hasStoredAuthData,
    hasSessionData,
} from "@/lib/utils/authStorage"

export interface User {
    id: number
    name: string
    email: string
    avatar?: string
    role: "user" | "admin"
    emailVerified: boolean
    createdAt: string
    updatedAt: string
}

interface AuthState {
    user: User | null
    token: string | null
    refreshToken: string | null
    isAuthenticated: boolean
    isLoading: boolean
    isInitialized: boolean
}

const initialState: AuthState = {
    user: null,
    token: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: false,
    isInitialized: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{
                user: User
                token: string
                refreshToken: string
            }>,
        ) => {
            const { user, token, refreshToken } = action.payload

            // Update Redux state
            state.user = user
            state.token = token
            state.refreshToken = refreshToken
            state.isAuthenticated = true
            state.isLoading = false

            try {
                // Store in localStorage with encryption
                storeAuthData({ user, token, refreshToken })

                // Store session data
                storeSessionData(user.id)

                // Initialize session tracking
                if (typeof window !== "undefined") {
                    initializeSessionTracker()
                }

                console.log("✅ Credentials stored successfully")
            } catch (error) {
                console.error("❌ Failed to store credentials:", error)
                // Don't fail the login, but log the error
            }
        },

        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },

        logout: (state) => {
            // Clear Redux state
            state.user = null
            state.token = null
            state.refreshToken = null
            state.isAuthenticated = false
            state.isLoading = false

            // Clear stored data
            clearStoredAuthData()
            clearSessionData()

            console.log("🔓 User logged out successfully")
        },

        updateUser: (state, action: PayloadAction<Partial<User>>) => {
            if (state.user) {
                const updatedUser = { ...state.user, ...action.payload }
                state.user = updatedUser

                // Update stored data if we have tokens
                if (state.token && state.refreshToken) {
                    try {
                        storeAuthData({
                            user: updatedUser,
                            token: state.token,
                            refreshToken: state.refreshToken,
                        })
                    } catch (error) {
                        console.error("❌ Failed to update stored user data:", error)
                    }
                }
            }
        },

        initializeAuth: (state) => {
            state.isLoading = true

            try {
                console.log("🔄 Initializing auth state...")

                // Check if we have any stored auth data first
                if (!hasStoredAuthData()) {
                    console.log("📭 No stored auth data found - user not logged in")
                    state.isLoading = false
                    state.isInitialized = true
                    return
                }

                // Check if we have session data
                if (!hasSessionData()) {
                    console.log("📭 No session data found - clearing auth data")
                    clearStoredAuthData()
                    state.isLoading = false
                    state.isInitialized = true
                    return
                }

                // Check if session is still valid
                if (!isSessionValid()) {
                    console.log("🔒 Session invalid or expired - clearing auth data")
                    clearStoredAuthData()
                    clearSessionData()
                    state.isLoading = false
                    state.isInitialized = true
                    return
                }

                // Try to restore auth data from localStorage
                const storedAuth = getStoredAuthData()

                if (storedAuth) {
                    state.user = storedAuth.user
                    state.token = storedAuth.token
                    state.refreshToken = storedAuth.refreshToken
                    state.isAuthenticated = true

                    // Initialize session tracking
                    if (typeof window !== "undefined") {
                        initializeSessionTracker()
                    }

                    console.log("✅ Auth state restored from storage")
                } else {
                    console.log("❌ Failed to restore auth data")
                    clearSessionData()
                }
            } catch (error) {
                console.error("❌ Failed to initialize auth:", error)
                // Clear potentially corrupted data
                clearStoredAuthData()
                clearSessionData()
            } finally {
                state.isLoading = false
                state.isInitialized = true
            }
        },

        sessionExpired: (state) => {
            console.log("⏰ Session expired - logging out")

            // Clear Redux state
            state.user = null
            state.token = null
            state.refreshToken = null
            state.isAuthenticated = false
            state.isLoading = false

            // Clear stored data
            clearStoredAuthData()
            clearSessionData()
        },
    },
})

export const { setCredentials, setLoading, logout, updateUser, initializeAuth, sessionExpired } = authSlice.actions

export default authSlice.reducer
