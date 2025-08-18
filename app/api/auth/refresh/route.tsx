import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { AuthService } from "@/lib/services/authService"

const refreshSchema = z.object({
    refreshToken: z.string(),
})

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { refreshToken } = refreshSchema.parse(body)

        const result = await AuthService.refreshAccessToken(refreshToken)

        if (!result.success) {
            return NextResponse.json({ message: result.message, statusCode: 401 }, { status: 401 })
        }

        return NextResponse.json({
            user: result.user,
            token: result.token,
            refreshToken: result.refreshToken,
            message: result.message,
        })
    } catch (error) {
        console.error("Refresh token error:", error)
        return NextResponse.json({ message: "Invalid refresh token", statusCode: 401 }, { status: 401 })
    }
}
