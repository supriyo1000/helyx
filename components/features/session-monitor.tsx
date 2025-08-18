"use client"

import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getSessionTimeRemaining, hasSessionData } from "@/lib/utils/authStorage"
import type { RootState } from "@/lib/store"
import { toast } from "sonner"

export function SessionMonitor() {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        // Only monitor if user is authenticated and has session data
        if (!isAuthenticated || !hasSessionData()) return

        const updateTimeRemaining = () => {
            const remaining = getSessionTimeRemaining()

            // Show warning when 5 minutes remaining
            if (remaining === 5) {
                toast.warning("Your session will expire in 5 minutes", {
                    duration: 5000,
                })
            }

            // Show final warning when 1 minute remaining
            if (remaining === 1) {
                toast.error("Your session will expire in 1 minute", {
                    duration: 10000,
                })
            }
        }

        // Update immediately
        updateTimeRemaining()

        // Update every minute
        const interval = setInterval(updateTimeRemaining, 60000)

        return () => clearInterval(interval)
    }, [isAuthenticated])

    // Don't render anything - this is just a monitoring component
    return null
}
