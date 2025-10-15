// import { type NextRequest, NextResponse } from "next/server"
// import { generateOTP} from "@/lib/utils/otpStorage"
// import { sendOTPEmail } from "@/lib/utils/email-otp-service"
// // import { validateCompanyEmail } from "@/lib/utils/emailValidation"

// export async function POST(request: NextRequest) {
//     try {
//         const { email } = await request.json()

//         if (!email) {
//             return NextResponse.json({ message: "Email is required" }, { status: 400 })
//         }

//         // // Validate company email
//         // const emailValidation = validateCompanyEmail(email)
//         // if (!emailValidation.isValid) {
//         //     return NextResponse.json({ message: emailValidation.error || "Invalid email address" }, { status: 400 })
//         // }

//         // Generate and store OTP
//         const otp = generateOTP()

//         // Send OTP via email
//         const emailSent = await sendOTPEmail(email, otp)

//         if (!emailSent) {
//             return NextResponse.json({ message: "Failed to send verification email" }, { status: 500 })
//         }

//         return NextResponse.json({
//             message: "Verification code sent to your email",
//             email: email,
//         })
//     } catch (error) {
//         console.error("[v0] Send OTP error:", error)
//         return NextResponse.json({ message: "Internal server error" }, { status: 500 })
//     }
// }

// D: \Helyx_website\helyx2\app\api\auth\send - otp\route.tsx
import { type NextRequest, NextResponse } from "next/server"
import { generateOTP } from "@/lib/utils/otpStorage"
import { sendOTPEmail } from "@/lib/utils/email-otp-service"
// import { validateCompanyEmail } from "@/lib/utils/emailValidation"

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json()

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 })
        }

        // // Validate company email
        // const emailValidation = validateCompanyEmail(email)
        // if (!emailValidation.isValid) {
        //     return NextResponse.json({ message: emailValidation.error || "Invalid email address" }, { status: 400 })
        // }

        // Generate and store OTP
        const otp = generateOTP()

        // Send OTP via email
        const emailSent = await sendOTPEmail(email, otp)

        if (!emailSent) {
            return NextResponse.json({ message: "Failed to send verification email" }, { status: 500 })
        }

        return NextResponse.json({
            message: "Verification code sent to your email",
            email: email,
        })
    } catch (error) {
        console.error("[v0] Send OTP error:", error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}
