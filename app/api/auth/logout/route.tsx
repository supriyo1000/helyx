import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { AuthService } from "@/lib/services/authService"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

interface JwtPayload {
    userId: string
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { refreshToken } = body

        // Get user ID from access token if available
        let userId: string | undefined
        const authHeader = request.headers.get("authorization")
        const accessToken = authHeader?.replace("Bearer ", "")

        if (accessToken) {
            try {
                const decoded = jwt.verify(accessToken, JWT_SECRET) as JwtPayload
                userId = decoded.userId
            } catch {
                // Token might be expired, but we still want to logout
            }
        }

        const result = await AuthService.logoutUser(refreshToken, userId)

        return NextResponse.json({
            message: result.message,
        })
    } catch {
        console.error("Logout error")
        return NextResponse.json({
            message: "Logged out successfully",
        })
    }
}
