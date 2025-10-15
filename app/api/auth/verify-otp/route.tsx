// D: \Helyx_website\helyx2\app\api\auth\verify - otp\route.tsx
import { type NextRequest, NextResponse } from "next/server"
import { verifyOTP } from "@/lib/utils/otpStorage"

export async function POST(request: NextRequest) {
    try {
        const { email, otp } = await request.json()
        console.log("email, otp", email, otp);
        

        if (!email || !otp) {
            return NextResponse.json({ message: "Email and OTP are required" }, { status: 400 })
        }

        // Verify OTP
        const verification = await verifyOTP(email, otp)

        console.log("verification", verification);
        

        if (!verification.valid) {
            return NextResponse.json({ message: verification.error || "Invalid OTP" }, { status: 400 })
        }

        return NextResponse.json({
            message: "Email verified successfully",
            verified: true,
        })
    } catch (error) {
        console.error("[v0] Verify OTP error:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}
