import bcrypt from "bcryptjs"

// Storage keys
const AUTH_STORAGE_KEY = "helyx_auth_data"
const SESSION_STORAGE_KEY = "helyx_session_data"

// Session duration (1 hour in milliseconds)
const SESSION_DURATION = 60 * 60 * 1000 // 1 hour

export interface StoredAuthData {
    user: {
        id: number
        name: string
        email: string
        avatar?: string
        role: "user" | "admin"
        emailVerified: boolean
        createdAt: string
        updatedAt: string
    }
    token: string
    refreshToken: string
    encryptedAt: number
}

export interface SessionData {
    userId: number
    loginTime: number
    lastActivity: number
    expiresAt: number
}

// Generate a simple encryption key based on user data
function generateEncryptionKey(userData: string): string {
    return bcrypt.hashSync(userData + "helyx_secret_key", 10)
}

// Encrypt data using bcrypt
function encryptData(data: string, key: string): string {
    try {
        // Create a hash of the data with the key as salt
        const encrypted = bcrypt.hashSync(data + key, 10)
        return btoa(encrypted) // Base64 encode for storage
    } catch {
        console.error("Encryption error")
        throw new Error("Failed to encrypt data")
    }
}

// Decrypt and verify data
function decryptData(encryptedData: string, originalData: string, key: string): boolean {
    try {
        const decoded = atob(encryptedData) // Base64 decode
        return bcrypt.compareSync(originalData + key, decoded)
    } catch {
        console.error("Decryption error")
        return false
    }
}

// Check if user has any stored auth data (without validating session)
export function hasStoredAuthData(): boolean {
    try {
        const encryptedData = localStorage.getItem(AUTH_STORAGE_KEY)
        const verifyData = localStorage.getItem(AUTH_STORAGE_KEY + "_verify")
        return !!(encryptedData && verifyData)
    } catch {
        return false
    }
}

// Check if user has session data (without validating expiry)
export function hasSessionData(): boolean {
    try {
        const sessionJson = localStorage.getItem(SESSION_STORAGE_KEY)
        return !!sessionJson
    } catch {
        return false
    }
}

// Store auth data in localStorage with encryption
export function storeAuthData(authData: Omit<StoredAuthData, "encryptedAt">): void {
    try {
        const dataToStore: StoredAuthData = {
            ...authData,
            encryptedAt: Date.now(),
        }

        // Generate encryption key based on user email and id
        const encryptionKey = generateEncryptionKey(authData.user.email + authData.user.id)

        // Convert to JSON string
        const jsonData = JSON.stringify(dataToStore)

        // Encrypt the data
        const encryptedData = encryptData(jsonData, encryptionKey)

        // Store in localStorage
        localStorage.setItem(AUTH_STORAGE_KEY, encryptedData)

        // Also store the original JSON for verification (this will be used to verify decryption)
        localStorage.setItem(AUTH_STORAGE_KEY + "_verify", btoa(jsonData))

        console.log("✅ Auth data stored successfully")
    } catch {
        console.error("❌ Failed to store auth data")
        throw new Error("Failed to store authentication data")
    }
}

// Retrieve and decrypt auth data from localStorage
export function getStoredAuthData(): StoredAuthData | null {
    try {
        const encryptedData = localStorage.getItem(AUTH_STORAGE_KEY)
        const verifyData = localStorage.getItem(AUTH_STORAGE_KEY + "_verify")

        if (!encryptedData || !verifyData) {
            console.log("📭 No stored auth data found")
            return null
        }

        // Decode the verification data
        const originalJson = atob(verifyData)
        const parsedData = JSON.parse(originalJson) as StoredAuthData

        // Generate the same encryption key
        const encryptionKey = generateEncryptionKey(parsedData.user.email + parsedData.user.id)

        // Verify the encrypted data matches
        const isValid = decryptData(encryptedData, originalJson, encryptionKey)

        if (!isValid) {
            console.log("❌ Auth data verification failed - possible tampering")
            clearStoredAuthData()
            return null
        }

        // Check if data is not too old (optional security measure)
        const dataAge = Date.now() - parsedData.encryptedAt
        const maxAge = 7 * 24 * 60 * 60 * 1000 // 7 days

        if (dataAge > maxAge) {
            console.log("⏰ Stored auth data is too old")
            clearStoredAuthData()
            return null
        }

        console.log("✅ Auth data retrieved and verified successfully")
        return parsedData
    } catch {
        console.error("❌ Failed to retrieve auth data")
        clearStoredAuthData()
        return null
    }
}

// Clear stored auth data
export function clearStoredAuthData(): void {
    try {
        localStorage.removeItem(AUTH_STORAGE_KEY)
        localStorage.removeItem(AUTH_STORAGE_KEY + "_verify")
        console.log("🗑️ Auth data cleared from storage")
    } catch {
        console.error("❌ Failed to clear auth data")
    }
}

// Store session data
export function storeSessionData(userId: number): void {
    try {
        const now = Date.now()
        const sessionData: SessionData = {
            userId,
            loginTime: now,
            lastActivity: now,
            expiresAt: now + SESSION_DURATION,
        }

        localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData))
        console.log("✅ Session data stored successfully")
    } catch {
        console.error("❌ Failed to store session data")
    }
}

// Update session activity
export function updateSessionActivity(): void {
    try {
        const sessionData = getSessionData()
        if (sessionData) {
            sessionData.lastActivity = Date.now()
            // Extend session if user is active
            sessionData.expiresAt = Date.now() + SESSION_DURATION
            localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData))
        }
    } catch {
        console.error("❌ Failed to update session activity")
    }
}

// Get session data (returns null if expired or doesn't exist)
export function getSessionData(): SessionData | null {
    try {
        const sessionJson = localStorage.getItem(SESSION_STORAGE_KEY)
        if (!sessionJson) {
            return null
        }

        const sessionData = JSON.parse(sessionJson) as SessionData

        // Check if session is expired
        if (Date.now() > sessionData.expiresAt) {
            console.log("⏰ Session expired")
            clearSessionData()
            return null
        }

        return sessionData
    } catch {
        console.error("❌ Failed to get session data")
        clearSessionData()
        return null
    }
}

// Check if session is valid (only if session exists)
export function isSessionValid(): boolean {
    // If no session data exists, it's not invalid - it just doesn't exist
    if (!hasSessionData()) {
        return false
    }

    const sessionData = getSessionData()
    return sessionData !== null
}

// Clear session data
export function clearSessionData(): void {
    try {
        localStorage.removeItem(SESSION_STORAGE_KEY)
        console.log("🗑️ Session data cleared")
    } catch {
        console.error("❌ Failed to clear session data")
    }
}

// Get remaining session time in minutes
export function getSessionTimeRemaining(): number {
    const sessionData = getSessionData()
    if (!sessionData) return 0

    const remaining = sessionData.expiresAt - Date.now()
    return Math.max(0, Math.floor(remaining / (60 * 1000))) // Convert to minutes
}

// Session activity tracker - only initialize if user is logged in
export function initializeSessionTracker(): void {
    // Only initialize if we have session data
    if (!hasSessionData()) {
        console.log("📭 No session data found - skipping session tracker initialization")
        return
    }

    console.log("🔄 Initializing session tracker")

    // Update activity on user interactions
    const events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart", "click"]

    const updateActivity = () => {
        updateSessionActivity()
    }

    events.forEach((event) => {
        document.addEventListener(event, updateActivity, { passive: true })
    })

    // Check session validity every minute
    const sessionCheckInterval = setInterval(() => {
        if (!isSessionValid()) {
            console.log("🔒 Session expired - clearing auth data")
            clearStoredAuthData()
            clearSessionData()

            // Dispatch custom event for session expiry
            window.dispatchEvent(new CustomEvent("sessionExpired"))

            clearInterval(sessionCheckInterval)
        }
    }, 60000) // Check every minute

    // Clear interval when page unloads
    window.addEventListener("beforeunload", () => {
        clearInterval(sessionCheckInterval)
    })
}
