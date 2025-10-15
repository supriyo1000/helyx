import { MultiStepSignupForm } from "@/components/auth/multi-step-signup-form"
// import { SignupForm } from "@/components/auth/signup-form"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Sign Up - Helyx",
    description: "Create your Helyx account",
}

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-4">
                    <div className="flex justify-center mb-2">
                        <Link href={"/"}>
                            <Image
                                src={"/logo.jpeg"}
                                width={100}
                                height={80}
                                alt="helyx"
                            />
                        </Link>
                    </div>
                    <h1 className="text-lg lg:text-2xl font-bold text-gray-900">Create your account</h1>
                    <p className="text-sm lg:text-md text-gray-600 mt-1">Join Helyx and start Replication</p>
                </div>

                {/* <SignupForm /> */}

                <MultiStepSignupForm />

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
