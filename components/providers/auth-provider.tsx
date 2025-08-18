"use client"

import type React from "react"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { initializeAuth, sessionExpired } from "@/lib/features/auth/authSlice"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        // Initialize auth state from localStorage
        dispatch(initializeAuth())

        // Listen for session expiry events
        const handleSessionExpired = () => {
            dispatch(sessionExpired())
            toast.error("Your session has expired. Please log in again.")
            router.push("/auth/login")
        }

        window.addEventListener("sessionExpired", handleSessionExpired)

        // Cleanup
        return () => {
            window.removeEventListener("sessionExpired", handleSessionExpired)
        }
    }, [dispatch, router])

    return <>{children}</>
}
