// "use client"

// import { useEffect, useState } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
// import { Alert, AlertDescription } from "@/components/ui/alert"
// import { Loader2, Mail, Shield, User, ArrowLeft, EyeOff, Eye } from "lucide-react"
// import { toast } from "sonner"
// import { useSignupMutation } from "@/lib/api/authApi"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// // import { validateCompanyEmail } from "@/lib/utils/emailValidation"

// interface SignupState {
//     step: number
//     email: string
//     otp: string
//     name: string
//     password: string
//     confirmPassword: string
//     isVerified: boolean
//     acceptTerms: boolean
// }

// interface SignupError {
//     data?: {
//         message?: string
//         errors?: Record<string, string[]>
//     }
// }

// export function MultiStepSignupForm() {
//     // const { toast } = useToast()
//     const [loading, setLoading] = useState(false)
//     const [error1, setError1] = useState("")
//     const [showPassword, setShowPassword] = useState(false)
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//     const [signup, { isLoading, error }] = useSignupMutation()
//     const router = useRouter()

//     const [state, setState] = useState<SignupState>({
//         step: 1,
//         email: "",
//         otp: "",
//         name: "",
//         password: "",
//         confirmPassword: "",
//         isVerified: false,
//         acceptTerms: false,
//     })

//     // Load state from localStorage on mount
//     useEffect(() => {
//         const savedState = localStorage.getItem("signupProcess")
//         if (savedState) {
//             try {
//                 const parsed = JSON.parse(savedState)
//                 setState(parsed)
//             } catch (error) {
//                 console.error("Failed to parse saved state:", error)
//             }
//         }
//     }, [])

//     const updateState = (updates: Partial<SignupState>) => {
//         setState((prev) => {
//             const newState = { ...prev, ...updates }

//             try {
//                 localStorage.setItem("signupProcess", JSON.stringify(newState))
//             } catch (error) {
//                 console.error("Failed to save signupPage to localStorage:", error)
//             }

//             return newState
//         })
//     }


//     // const validateEmail = (email: string) => {
//     //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     //     return emailRegex.test(email)
//     // }

//     // const validatePassword = (password: string) => {
//     //     return password.length >= 8
//     // }

//     const sendOTP = async () => {
//         // const emailValidation = validateCompanyEmail(state.email)
//         // if (!emailValidation.isValid) {
//         //     setError1(emailValidation.error || "Invalid email address")
//         //     toast.error(emailValidation.error || "Invalid email address")
//         //     return
//         // }

//         setLoading(true)
//         setError1("")

//         try {
//             const response = await fetch("/api/auth/send-otp", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email: state.email }),
//             })

//             const data = await response.json()

//             if (response.ok) {
//                 updateState({ step: 2 })
//                 toast.success("OTP Sent", {
//                     description: "Please check your email for the verification code.",
//                 });
//             } else {
//                 setError1(data.message || "Failed to send OTP")
//             }
//         } catch (error) {
//             if (error instanceof Error) {
//                 setError1(error.message);
//             } else {
//                 setError1(String(error));
//             }
//         } finally {
//             setLoading(false)
//         }
//     }

//     const verifyOTP = async () => {
//         if (state.otp.length !== 6) {
//             setError1("Please enter the complete 6-digit code")
//             return
//         }

//         setLoading(true)
//         setError1("")

//         try {
//             const response = await fetch("/api/auth/verify-otp", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     email: state.email,
//                     otp: state.otp,
//                 }),
//             })

//             const data = await response.json()

//             if (response.ok) {
//                 updateState({ step: 3, isVerified: true })
//                 toast.success("Email Verified", {
//                     description: "Your email has been successfully verified.",
//                 })
//             } else {
//                 setError1(data.message || "Invalid OTP")
//             }
//         } catch (error) {
//             if (error instanceof Error) {
//                 setError1(error.message);
//             } else {
//                 setError1(String(error));
//             }
//         } finally {
//             setLoading(false)
//         }
//     }

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault()

//         // Validate email before submission
//         // const emailValidation = validateCompanyEmail(formData.email)
//         // if (!emailValidation.isValid) {
//         //   setEmailError(emailValidation.error || "Invalid email address")
//         //   toast.error(emailValidation.error || "Invalid email address")
//         //   return
//         // }

//         // Validate password match
//         if (state.password !== state.confirmPassword) {
//             toast.error("Passwords do not match")
//             return
//         }

//         // Validate terms acceptance
//         if (!state.acceptTerms) {
//             toast.error("Please accept the terms and conditions")
//             return
//         }

//         try {
//             await signup({
//                 name: state.name,
//                 email: state.email,
//                 password: state.password,
//                 confirmPassword: state.confirmPassword
//             }).unwrap()
//             toast.success("Account created successfully!")
//             router.push("/")
//         } catch (err) {
//             const signupError = err as SignupError
//             toast.error(signupError?.data?.message || "Signup failed")
//         }
//     }

//     const goBack = () => {
//         if (state.step > 1) {
//             updateState({ step: state.step - 1 })
//             setError1("")
//         }
//     }

//     const resendOTP = async () => {
//         // if (resendCooldown > 0) return
//         // setState((item)=> item.otp = '')
//         await sendOTP()
//     }

//     const handleInputChange = (field: string, value: string | boolean) => {
//         setState((prev) => ({ ...prev, [field]: value }))
//     }

//     const renderStep = () => {
//         switch (state.step) {
//             case 1:
//                 return (
//                     <div className="space-y-4">
//                         <div className="text-center space-y-2">
//                             <Mail className="mx-auto h-12 w-12 text-info" />
//                             <CardTitle>Verify Your Email</CardTitle>
//                             <CardDescription>Enter your email address to get started</CardDescription>
//                         </div>

//                         <div className="space-y-2">
//                             <Label htmlFor="email">Email Address</Label>
//                             <Input
//                                 id="email"
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 value={state.email}
//                                 onChange={(e) => updateState({ email: e.target.value })}
//                                 disabled={loading}
//                             />
//                         </div>

//                         {error && (
//                             <Alert variant="destructive">
//                                 <AlertDescription>{error1}</AlertDescription>
//                             </Alert>
//                         )}

//                         <Button onClick={sendOTP} disabled={loading || !state.email} className="w-full bg-linear-to-r from-cyan-500 to-blue-500 cursor-pointer">
//                             {loading ? (
//                                 <>
//                                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                                     Sending OTP...
//                                 </>
//                             ) : (
//                                 "Send Verification Code"
//                             )}
//                         </Button>
//                     </div>
//                 )

//             case 2:
//                 return (
//                     <div className="space-y-4">
//                         <div className="text-center space-y-2">
//                             <Shield className="mx-auto h-12 w-12 text-primary" />
//                             <CardTitle>Enter Verification Code</CardTitle>
//                             <CardDescription>We sent a 6-digit code to {state.email}</CardDescription>
//                         </div>

//                         <div className="space-y-2">
//                             <Label>Verification Code</Label>
//                             <div className="flex justify-center">
//                                 <InputOTP
//                                     maxLength={6}
//                                     value={state.otp}
//                                     onChange={(value) => updateState({ otp: value })}
//                                     disabled={loading}
//                                 >
//                                     <InputOTPGroup>
//                                         <InputOTPSlot index={0} />
//                                         <InputOTPSlot index={1} />
//                                         <InputOTPSlot index={2} />
//                                         <InputOTPSlot index={3} />
//                                         <InputOTPSlot index={4} />
//                                         <InputOTPSlot index={5} />
//                                     </InputOTPGroup>
//                                 </InputOTP>
//                             </div>
//                         </div>

//                         {error && (
//                             <Alert variant="destructive">
//                                 <AlertDescription>{error1}</AlertDescription>
//                             </Alert>
//                         )}

//                         <div className="space-y-3">
//                             <Button onClick={verifyOTP} disabled={loading || state.otp.length !== 6} className="w-full bg-linear-to-r from-cyan-500 to-blue-500 cursor-pointer">
//                                 {loading ? (
//                                     <>
//                                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                                         Verifying...
//                                     </>
//                                 ) : (
//                                     "Verify Code"
//                                 )}
//                             </Button>

//                             <div className="text-center">
//                                 <Button variant="ghost" size="sm" onClick={resendOTP}>
//                                     Resend Code
//                                 </Button>
//                             </div>

//                             <Button variant="outline" size="sm" onClick={goBack} className="w-full bg-transparent">
//                                 <ArrowLeft className="mr-2 h-4 w-4" />
//                                 Change Email
//                             </Button>
//                         </div>
//                     </div>
//                 )

//             case 3:
//                 return (
//                     <div className="space-y-4">
//                         <div className="text-center space-y-2">
//                             <User className="mx-auto h-12 w-12 text-primary" />
//                             <CardTitle>Complete Your Account</CardTitle>
//                             <CardDescription>Create your account details</CardDescription>
//                         </div>

//                         <div className="space-y-4">
//                             <div className="space-y-2">
//                                 <Label htmlFor="name">Full Name</Label>
//                                 <Input
//                                     id="name"
//                                     type="text"
//                                     placeholder="Enter your full name"
//                                     value={state.name}
//                                     onChange={(e) => updateState({ name: e.target.value })}
//                                     disabled={loading}
//                                 />
//                             </div>

//                             <div className="space-y-2">
//                                 <Label htmlFor="password">Password</Label>
//                                 <Input
//                                     id="password"
//                                     type={showPassword ? "text" : "password"}
//                                     placeholder="Create a password"
//                                     value={state.password}
//                                     onChange={(e) => updateState({ password: e.target.value })}
//                                     disabled={loading}
//                                     required
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                                     disabled={loading}
//                                 >
//                                     {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//                                 </button>
//                             </div>

//                             <div className="space-y-2">
//                                 <Label htmlFor="confirmPassword">Confirm Password</Label>
//                                 <Input
//                                     id="confirmPassword"
//                                     type={showConfirmPassword ? "text" : "password"}
//                                     placeholder="Confirm your password"
//                                     value={state.confirmPassword}
//                                     onChange={(e) => updateState({ confirmPassword: e.target.value })}
//                                     disabled={loading}
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                                     disabled={loading}
//                                 >
//                                     {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="flex items-start space-x-2">
//                             <input
//                                 type="checkbox"
//                                 id="acceptTerms"
//                                 checked={state.acceptTerms}
//                                 onChange={(e) => handleInputChange("acceptTerms", e.target.checked)}
//                                 className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                                 disabled={isLoading}
//                                 required
//                             />
//                             <label htmlFor="acceptTerms" className="text-sm text-gray-600">
//                                 I agree to the{" "}
//                                 <Link href="/terms_and_condition" className="text-blue-600 hover:text-blue-500 transition-colors">
//                                     Terms and Conditions
//                                 </Link>
//                             </label>
//                         </div>

//                         {error && (
//                             <Alert variant="destructive">
//                                 <AlertDescription>{error1}</AlertDescription>
//                             </Alert>
//                         )}

//                         <div className="space-y-3">
//                             <Button
//                                 onClick={handleSubmit}
//                                 disabled={isLoading || !state.name || !state.password || !state.confirmPassword}
//                                 className="w-full bg-linear-to-r from-cyan-500 to-blue-500 cursor-pointer"
//                             >
//                                 {loading ? (
//                                     <>
//                                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                                         Creating Account...
//                                     </>
//                                 ) : (
//                                     "Create Account"
//                                 )}
//                             </Button>

//                             <Button variant="outline" size="sm" onClick={goBack} className="w-full bg-transparent">
//                                 <ArrowLeft className="mr-2 h-4 w-4" />
//                                 Back to Verification
//                             </Button>
//                         </div>
//                     </div>
//                 )

//             default:
//                 return null
//         }
//     }

//     return (
//         <Card className="w-full">
//             <CardHeader className="space-y-1">
//                 <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
//                     <div className={`flex items-center space-x-1 ${state.step >= 1 ? "text-primary" : ""}`}>
//                         <div className={`w-3 h-3 rounded-full ${state.step >= 1 ? "rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700" : "bg-muted"}`} />
//                         <span className={`${state.step >= 1 ? "text-blue-800 font-bold" : "text-primary font-semibold"}`}>Email</span>
//                     </div>
//                     <div className="w-8 h-px bg-border" />
//                     <div className={`flex items-center space-x-1 ${state.step >= 2 ? "text-primary" : ""}`}>
//                         <div className={`w-2 h-2 rounded-full ${state.step >= 2 ? "bg-primary" : "bg-muted"}`} />
//                         <span className={`${state.step >= 2 ? "text-blue-800 font-bold" : "text-primary font-semibold"}`}>Verify</span>
//                     </div>
//                     <div className="w-8 h-px bg-border" />
//                     <div className={`flex items-center space-x-1 ${state.step >= 3 ? "text-primary" : ""}`}>
//                         <div className={`w-2 h-2 rounded-full ${state.step >= 3 ? "bg-primary" : "bg-muted"}`} />
//                         <span className={`${state.step >= 3 ? "text-blue-800 font-bold" : "text-primary font-semibold"}`}>Account</span>
//                     </div>
//                 </div>
//             </CardHeader>
//             <CardContent>{renderStep()}</CardContent>
//         </Card>
//     )
// }






"use client"

import { useEffect, useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Mail, Shield, User, ArrowLeft, EyeOff, Eye } from "lucide-react"
import { toast } from "sonner"
import { useSignupMutation } from "@/lib/api/authApi"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface SignupState {
    step: number
    email: string
    otp: string
    name: string
    password: string
    confirmPassword: string
    isVerified: boolean
    acceptTerms: boolean
}

interface SignupError {
    data?: { message?: string; errors?: Record<string, string[]> }
}

// put near your interfaces
function pick<T, K extends readonly (keyof T)[]>(obj: T, keys: K): Pick<T, K[number]> {
    const out = {} as Pick<T, K[number]>
    for (const k of keys) {
        out[k] = obj[k]
    }
    return out
}


const STORAGE_KEY = "signupProcess"
const PERSIST_KEYS = ["step", "email", "name"] as const satisfies readonly (keyof SignupState)[]

export function MultiStepSignupForm() {
    const [loading, setLoading] = useState(false) // OTP actions
    const [error1, setError1] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [resendCooldown, setResendCooldown] = useState(0)
    const [signup, { isLoading }] = useSignupMutation()
    const router = useRouter()

    const [state, setState] = useState<SignupState>({
        step: 1,
        email: "",
        otp: "",
        name: "",
        password: "",
        confirmPassword: "",
        isVerified: false,
        acceptTerms: false,
    })

    // ---------- sessionStorage helpers (whitelist) ----------
    const persistState = (s: SignupState) => {
        const toSave = pick(s, PERSIST_KEYS)
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
    }

    const loadState = (): Partial<SignupState> => {
        try {
            const raw = sessionStorage.getItem(STORAGE_KEY)
            if (!raw) return {}
            const parsed = JSON.parse(raw) as Partial<SignupState>
            // ensure we only take whitelisted keys, with proper typing
            return pick(parsed as SignupState, PERSIST_KEYS)
        } catch {
            return {}
        }
    }

    useEffect(() => {
        const saved = loadState()
        setState(prev => ({ ...prev, ...saved }))
    }, [])

    useEffect(() => {
        if (resendCooldown <= 0) return
        const t = setInterval(() => setResendCooldown(s => (s > 0 ? s - 1 : 0)), 1000)
        return () => clearInterval(t)
    }, [resendCooldown])

    const updateState = (updates: Partial<SignupState>) => {
        setState(prev => {
            const next = { ...prev, ...updates }
            try { persistState(next) } catch (e) { console.error("persist failed", e) }
            return next
        })
    }

    // ---------- Password strength ----------
    const getPasswordScore = (pwd: string) => {
        let score = 0
        if (pwd.length >= 8) score++
        if (/[a-z]/.test(pwd)) score++
        if (/[A-Z]/.test(pwd)) score++
        if (/\d/.test(pwd)) score++
        if (/[^A-Za-z0-9]/.test(pwd)) score++
        return score // 0..5
    }

    const strength = useMemo(() => {
        const score = getPasswordScore(state.password)
        const labels = ["Very weak", "Weak", "Fair", "Good", "Strong", "Excellent"]
        // map score (0..5) to 0..100 width
        const width = `${(score / 5) * 100}%`
        const color =
            score <= 1 ? "bg-red-500" :
                score === 2 ? "bg-yellow-500" :
                    score === 3 ? "bg-amber-500" :
                        score === 4 ? "bg-green-500" : "bg-emerald-600"
        return { score, label: labels[score], width, color }
    }, [state.password])

    // ---------- Actions ----------
    const sendOTP = async () => {
        setLoading(true)
        setError1("")
        try {
            const response = await fetch("/api/auth/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: state.email.trim() }),
            })
            const data = await response.json()
            if (response.ok) {
                updateState({ step: 2 })
                setResendCooldown(60)
                toast.success("OTP Sent", { description: "Please check your email for the verification code." })
            } else {
                setError1(data.message || "Failed to send OTP")
            }
        } catch (e) {
            setError1(e instanceof Error ? e.message : String(e))
        } finally {
            setLoading(false)
        }
    }

    const verifyOTP = async () => {
        if (state.otp.trim().length !== 6) {
            setError1("Please enter the complete 6-digit code")
            return
        }
        setLoading(true)
        setError1("")
        try {
            const response = await fetch("/api/auth/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: state.email.trim(), otp: state.otp.trim() }),
            })
            const data = await response.json()
            if (response.ok) {
                updateState({ step: 3 }) // do not persist sensitive flags
                setState(prev => ({ ...prev, isVerified: true }))
                toast.success("Email Verified", { description: "Your email has been successfully verified." })
            } else {
                setError1(data.message || "Invalid OTP")
            }
        } catch (e) {
            setError1(e instanceof Error ? e.message : String(e))
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const name = state.name.trim()
        const email = state.email.trim()
        const password = state.password
        const confirmPassword = state.confirmPassword

        if (password !== confirmPassword) {
            toast.error("Passwords do not match")
            return
        }
        if (!state.acceptTerms) {
            toast.error("Please accept the terms and conditions")
            return
        }

        try {
            await (signup({ name, email, password, confirmPassword }).unwrap())
            toast.success("Account created successfully!")
            sessionStorage.removeItem(STORAGE_KEY) // clear persisted progress
            router.push("/")
        } catch (err) {
            const signupError = err as SignupError
            toast.error(signupError?.data?.message || "Signup failed")
        }
    }

    const goBack = () => {
        if (state.step > 1) {
            updateState({ step: state.step - 1 })
            setError1("")
        }
    }

    const resendOTP = async () => {
        if (!state.email) {
            setError1("Please enter your email first")
            return
        }
        if (resendCooldown > 0) return
        setState(prev => ({ ...prev, otp: "" }))
        await sendOTP()
    }

    // ---------- Render ----------
    const renderStep = () => {
        switch (state.step) {
            case 1:
                return (
                    <div className="space-y-4">
                        <div className="text-center space-y-2">
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <CardTitle>Verify Your Email</CardTitle>
                            <CardDescription>Enter your email address to get started</CardDescription>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={state.email}
                                onChange={(e) => updateState({ email: e.target.value })}
                                disabled={loading}
                                autoComplete="email"
                            />
                        </div>

                        {Boolean(error1) && (
                            <Alert variant="destructive">
                                <AlertDescription>{error1}</AlertDescription>
                            </Alert>
                        )}

                        <Button
                            onClick={sendOTP}
                            disabled={loading || !state.email.trim()}
                            className="w-full bg-linear-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending OTP...
                                </>
                            ) : (
                                "Send Verification Code"
                            )}
                        </Button>
                    </div>
                )

            case 2:
                return (
                    <div className="space-y-4">
                        <div className="text-center space-y-2">
                            <Shield className="mx-auto h-12 w-12 text-primary" />
                            <CardTitle>Enter Verification Code</CardTitle>
                            <CardDescription>We sent a 6-digit code to {state.email}</CardDescription>
                        </div>

                        <div className="space-y-2">
                            <Label>Verification Code</Label>
                            <div className="flex justify-center">
                                <InputOTP
                                    maxLength={6}
                                    value={state.otp}
                                    onChange={(value) => setState(prev => ({ ...prev, otp: value }))} // do NOT persist
                                    disabled={loading}
                                >
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>
                        </div>

                        {Boolean(error1) && (
                            <Alert variant="destructive">
                                <AlertDescription>{error1}</AlertDescription>
                            </Alert>
                        )}

                        <div className="space-y-3">
                            <Button
                                onClick={verifyOTP}
                                disabled={loading || state.otp.trim().length !== 6}
                                className="w-full bg-linear-to-r from-cyan-500 to-blue-500 cursor-pointer"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Verifying...
                                    </>
                                ) : (
                                    "Verify Code"
                                )}
                            </Button>

                            <div className="text-center">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={resendOTP}
                                    disabled={resendCooldown > 0 || loading}
                                >
                                    {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend Code"}
                                </Button>
                            </div>

                            <Button variant="outline" size="sm" onClick={goBack} className="w-full bg-transparent">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Change Email
                            </Button>
                        </div>
                    </div>
                )

            case 3:
                return (
                    <div className="space-y-4">
                        <div className="text-center space-y-2">
                            <User className="mx-auto h-12 w-12 text-primary" />
                            <CardTitle>Complete Your Account</CardTitle>
                            <CardDescription>Create your account details</CardDescription>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={state.name}
                                    onChange={(e) => updateState({ name: e.target.value })}
                                    disabled={loading || isLoading}
                                    autoComplete="name"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Create a password"
                                        value={state.password}
                                        onChange={(e) => setState(prev => ({ ...prev, password: e.target.value }))} // do NOT persist
                                        disabled={loading || isLoading}
                                        required
                                        autoComplete="new-password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(v => !v)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        disabled={loading || isLoading}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                                {/* Strength meter */}
                                <div className="mt-2">
                                    <div className="h-2 w-full rounded bg-muted overflow-hidden">
                                        <div
                                            className={`h-2 ${strength.color} transition-all duration-300`}
                                            style={{ width: strength.width }}
                                        />
                                    </div>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Strength: <span className="font-medium">{strength.label}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <div className="relative">
                                    <Input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm your password"
                                        value={state.confirmPassword}
                                        onChange={(e) => setState(prev => ({ ...prev, confirmPassword: e.target.value }))} // do NOT persist
                                        disabled={loading || isLoading}
                                        autoComplete="new-password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(v => !v)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        disabled={loading || isLoading}
                                        aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                id="acceptTerms"
                                checked={state.acceptTerms}
                                onChange={(e) => setState(prev => ({ ...prev, acceptTerms: e.target.checked }))} // do NOT persist
                                className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                disabled={loading || isLoading}
                                required
                            />
                            <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                                I agree to the{" "}
                                <Link href="/terms_and_condition" className="text-blue-600 hover:text-blue-500 transition-colors">
                                    Terms and Conditions
                                </Link>
                            </label>
                        </div>

                        {Boolean(error1) && (
                            <Alert variant="destructive">
                                <AlertDescription>{error1}</AlertDescription>
                            </Alert>
                        )}

                        <div className="space-y-3">
                            <Button
                                onClick={handleSubmit}
                                disabled={
                                    isLoading ||
                                    loading ||
                                    !state.name.trim() ||
                                    !state.password ||
                                    !state.confirmPassword ||
                                    !state.acceptTerms
                                }
                                className="w-full bg-linear-to-r from-cyan-500 to-blue-500 cursor-pointer"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Creating Account...
                                    </>
                                ) : (
                                    "Create Account"
                                )}
                            </Button>

                            <Button variant="outline" size="sm" onClick={goBack} className="w-full bg-transparent">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Verification
                            </Button>
                        </div>
                    </div>
                )

            default:
                return null
        }
    }

    return (
        <Card className="w-full">
            <CardHeader className="space-y-1">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <div className={`flex items-center space-x-1 ${state.step >= 1 ? "text-primary" : ""}`}>
                        <div className={`w-3 h-3 rounded-full ${state.step >= 1 ? "bg-radial from-pink-400 from-40% to-fuchsia-700" : "bg-muted"}`} />
                        <span className={`${state.step >= 1 ? "text-blue-800 font-bold" : "text-primary font-semibold"}`}>Email</span>
                    </div>
                    <div className="w-8 h-px bg-border" />
                    <div className={`flex items-center space-x-1 ${state.step >= 2 ? "text-primary" : ""}`}>
                        <div className={`w-3 h-3 rounded-full ${state.step >= 2 ? "bg-radial from-pink-400 from-40% to-fuchsia-700" : "bg-muted"}`} />
                        <span className={`${state.step >= 2 ? "text-blue-800 font-bold" : "text-primary font-semibold"}`}>Verify</span>
                    </div>
                    <div className="w-8 h-px bg-border" />
                    <div className={`flex items-center space-x-1 ${state.step >= 3 ? "text-primary" : ""}`}>
                        <div className={`w-3 h-3 rounded-full ${state.step >= 3 ? "bg-radial from-pink-400 from-40% to-fuchsia-700" : "bg-muted"}`} />
                        <span className={`${state.step >= 3 ? "text-blue-800 font-bold" : "text-primary font-semibold"}`}>Account</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    {renderStep()}
                </form>
            </CardContent>
        </Card>
    )
}

