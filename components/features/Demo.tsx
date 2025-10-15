
// "use client"

// import type React from "react"
// import { useState, useEffect, useRef } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent } from "@/components/ui/card"
// import { Mail, User, MessageSquare, Send, X } from "lucide-react"
// import { AnimatePresence, motion } from "motion/react"
// import { useLenis } from "lenis/react"
// import { createPortal } from "react-dom"
// import { toast } from "sonner"
// import useDemoContext from "@/hooks/useDemoContext"

// interface DemoFormData {
//   name: string
//   email: string
//   subject: string
//   message: string
// }

// export default function Demo() {
//     const { openDemo: openModal, setOpenDemo: setOpenModal, toggleDemo: toggler } = useDemoContext()
//   const modalRef = useRef<HTMLDivElement | null>(null)
//   const lenis = useLenis()

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent | TouchEvent) => {
//       const target = event.target as HTMLElement

//       // Don't close if clicking on form elements or their children
//       if (
//         target.tagName === "INPUT" ||
//         target.tagName === "TEXTAREA" ||
//         target.tagName === "BUTTON" ||
//         target.tagName === "LABEL" ||
//         target.closest("input") ||
//         target.closest("textarea") ||
//         target.closest("button") ||
//         target.closest("form")
//       ) {
//         return
//       }

//       // Don't close if the target is inside the modal
//       if (modalRef.current && !modalRef.current.contains(target)) {
//         setOpenModal(false)
//       }
//     }

//     const handleEscapeKey = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         setOpenModal(false)
//       }
//     }

//     if (openModal) {
//       lenis?.stop()

//       // Add a small delay to prevent immediate closing
//       const timeoutId = setTimeout(() => {
//         document.addEventListener("mousedown", handleClickOutside)
//         document.addEventListener("touchstart", handleClickOutside, { passive: true })
//       }, 100)

//       document.addEventListener("keydown", handleEscapeKey)
//       document.body.style.overflow = "hidden"

//       return () => {
//         clearTimeout(timeoutId)
//         document.removeEventListener("mousedown", handleClickOutside)
//         document.removeEventListener("touchstart", handleClickOutside)
//         document.removeEventListener("keydown", handleEscapeKey)
//       }
//     } else {
//       lenis?.start()
//       document.body.style.overflow = ""
//     }
//   }, [openModal, lenis, setOpenModal])

//   return <AnimatePresence>{openModal && <DemoModal toggler={toggler} ref={modalRef} />}</AnimatePresence>
// }

// function DemoModal({ toggler, ref }: { toggler: () => void; ref?: React.Ref<HTMLDivElement> }) {
//   const [isLoading, setIsLoading] = useState(false)
//     const [formData, setFormData] = useState<DemoFormData>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })

//     const handleInputChange = (field: keyof DemoFormData, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     e.stopPropagation()

//     if (!formData.name || !formData.email || !formData.subject || !formData.message) {
//       toast.error("Please fill in all fields")
//       return
//     }

//     if (formData.subject.length < 5) {
//       toast.error("Subject should be atleast 5 characters!!")
//       return
//     }

//     if (formData.message.length < 10) {
//       toast.error("Message should be atleast 10 characters!!")
//       return
//     }

//     setIsLoading(true)

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       })

//       const result = await response.json()

//       if (response.ok && result.success) {
//         toast.success("Message sent successfully! Thank you for contacting us.")
//         setFormData({ name: "", email: "", subject: "", message: "" })

//         // Close modal after a short delay to show the success message
//         setTimeout(() => {
//           toggler()
//         }, 1500)
//       } else {
//         toast.error(result.message || "Failed to send message. Please try again.")
//       }
//     } catch (error) {
//       console.error("Contact form error:", error)
//       toast.error("Failed to send message. Please try again later.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleBackdropClick = (e: React.MouseEvent) => {
//     // Only close if clicking directly on the backdrop
//     if (e.target === e.currentTarget) {
//       toggler()
//     }
//   }

//   const handleFormClick = (e: React.MouseEvent) => {
//     // Prevent any clicks inside the form from bubbling up
//     e.stopPropagation()
//   }

//   const handleInputFocus = (e: React.FocusEvent) => {
//     e.stopPropagation()
//   }

//   const handleInputClick = (e: React.MouseEvent) => {
//     e.stopPropagation()
//   }

//   return createPortal(
//     <motion.div
//       className="fixed inset-0 bg-black/50 z-[110] backdrop-blur-sm flex items-center justify-center p-4 overflow-y-scroll"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={handleBackdropClick}
//     >
//       <motion.div
//         ref={ref}
//         initial={{ opacity: 0, scale: 0.95, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.95, y: 20 }}
//         className="w-full md:max-w-sm lg:max-w-md relative max-h-[90vh]"
//         onClick={handleFormClick}
//       >
//         <Card className="border border-gray-200 shadow-xl bg-white">
//           <CardContent className="px-6">
            
//             <div className="text-center mb-6 relative">
//               <button
//                 onClick={toggler}
//                 className="absolute -top-2 -right-2 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
//                 aria-label="Close"
//                 type="button"
//               >
//                 <X className="w-5 h-5 text-gray-500" />
//               </button>

//               <div className="flex justify-center mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
//                   <Mail className="w-6 h-6 text-white" />
//                 </div>
//               </div>
//               <h2 className="lg:text-xl md:text-lg font-bold text-gray-900">Request for a <span className="text-blue-500">Demo</span></h2>
//               <p className="md:text-sm lg:text-md text-gray-600 mt-2">Have questions? We&apos;d love to hear from you.</p>
//             </div>

            
//             <form onSubmit={handleSubmit} className="space-y-4" onClick={handleFormClick}>
//               <div className="space-y-2">
//                 <label htmlFor="contact-name" className="text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
//                   <Input
//                     id="contact-name"
//                     type="text"
//                     placeholder="Enter your full name"
//                     value={formData.name}
//                     onChange={(e) => handleInputChange("name", e.target.value)}
//                     className="pl-10"
//                     disabled={isLoading}
//                     required
//                     onFocus={handleInputFocus}
//                     onClick={handleInputClick}
//                     autoComplete="name"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="contact-email" className="text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
//                   <Input
//                     id="contact-email"
//                     type="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     className="pl-10"
//                     disabled={isLoading}
//                     required
//                     onFocus={handleInputFocus}
//                     onClick={handleInputClick}
//                     autoComplete="email"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="contact-subject" className="text-sm font-medium text-gray-700">
//                   Subject
//                 </label>
//                 <div className="relative">
//                   <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
//                   <Input
//                     id="contact-subject"
//                     type="text"
//                     placeholder="What's this about?"
//                     value={formData.subject}
//                     onChange={(e) => handleInputChange("subject", e.target.value)}
//                     className="pl-10"
//                     disabled={isLoading}
//                     required
//                     onFocus={handleInputFocus}
//                     onClick={handleInputClick}
//                     autoComplete="off"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="contact-message" className="text-sm font-medium text-gray-700">
//                   Message
//                 </label>
//                 <textarea
//                   id="contact-message"
//                   placeholder="Tell us more about your inquiry..."
//                   value={formData.message}
//                   onChange={(e) => handleInputChange("message", e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
//                   // rows={4}
//                   disabled={isLoading}
//                   required
//                   onFocus={handleInputFocus}
//                   onClick={handleInputClick}
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white"
//                 disabled={isLoading}
//                 onClick={handleInputClick}
//               >
//                 {isLoading ? (
//                   <div className="flex items-center">
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                     Sending...
//                   </div>
//                 ) : (
//                   <div className="flex items-center">
//                     <Send className="w-4 h-4 mr-2" />
//                     Send Message
//                   </div>
//                 )}
//               </Button>
//             </form>

            
//             <div className="mt-4 lg:mt-6 text-center">
//               <p className="md:text-sm lg:text-md text-gray-500">We&apos;ll get back to you within 24 hours.</p>
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </motion.div>,
//     document.body,
//   )
// }



"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, User, MessageSquare, Send, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useLenis } from "lenis/react"
import { createPortal } from "react-dom"
import { toast } from "sonner"
import useDemoContext from "@/hooks/useDemoContext"

interface DemoFormData {
  name: string
  email: string
  company: string
  message: string
  preferred_date?: string // "YYYY-MM-DD"
  preferred_from_time?: string // "HH:MM"
  preferred_to_time?: string // "HH:MM"
  timezone?: string
  hp?: string
}

export default function Demo() {
  const { openDemo: openModal, setOpenDemo: setOpenModal, toggleDemo: toggler } = useDemoContext()
  const modalRef = useRef<HTMLDivElement | null>(null)
  const lenis = useLenis()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "BUTTON" ||
        target.tagName === "LABEL" ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("button") ||
        target.closest("form")
      ) {
        return
      }
      if (modalRef.current && !modalRef.current.contains(target)) {
        setOpenModal(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenModal(false)
    }

    if (openModal) {
      lenis?.stop()
      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("touchstart", handleClickOutside, { passive: true })
      }, 100)
      document.addEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "hidden"
      return () => {
        clearTimeout(timeoutId)
        document.removeEventListener("mousedown", handleClickOutside)
        document.removeEventListener("touchstart", handleClickOutside)
        document.removeEventListener("keydown", handleEscapeKey)
      }
    } else {
      lenis?.start()
      document.body.style.overflow = ""
    }
  }, [openModal, lenis, setOpenModal])

  return <AnimatePresence>{openModal && <DemoModal toggler={toggler} ref={modalRef} />}</AnimatePresence>
}

function DemoModal({ toggler, ref }: { toggler: () => void; ref?: React.Ref<HTMLDivElement> }) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<DemoFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
    preferred_date: "",
    preferred_from_time: "",
    preferred_to_time: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    hp: "",
  })
  const firstInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const id = setTimeout(() => firstInputRef.current?.focus(), 80)
    return () => clearTimeout(id)
  }, [])

  const handleInputChange = (field: keyof DemoFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isValidEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const name = (formData.name || "").trim()
    const email = (formData.email || "").trim()
    const company = (formData.company || "").trim()
    const message = (formData.message || "").trim()
    const honeypot = (formData.hp || "").trim()
    const preferred_date = (formData.preferred_date || "").trim()
    const preferred_from_time = (formData.preferred_from_time || "").trim()
    const preferred_to_time = (formData.preferred_to_time || "").trim()
    const timezone = formData.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || ""

    // Honeypot
    if (honeypot) {
      toast.error("Spam detected")
      return
    }

    // Required fields
    if (!name || !email || !company || !message) {
      toast.error("Please fill in all required fields")
      return
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address")
      return
    }

    if (message.length < 10) {
      toast.error("Message should be at least 10 characters")
      return
    }

    // Required date/time fields (per your request they are required)
    if (!preferred_date || !preferred_from_time || !preferred_to_time) {
      toast.error("Please choose date, from and to times")
      return
    }

    // Basic format checks
    const dateRe = /^\d{4}-\d{2}-\d{2}$/
    const timeRe = /^\d{2}:\d{2}$/
    if (!dateRe.test(preferred_date) || !timeRe.test(preferred_from_time) || !timeRe.test(preferred_to_time)) {
      toast.error("Date or time format looks incorrect")
      return
    }

    // Compare times: ensure from < to on the selected date
    const fromISO = new Date(`${preferred_date}T${preferred_from_time}`)
    const toISO = new Date(`${preferred_date}T${preferred_to_time}`)
    if (isNaN(fromISO.getTime()) || isNaN(toISO.getTime())) {
      toast.error("Could not parse selected date/time")
      return
    }
    if (fromISO >= toISO) {
      toast.error("'From' time must be earlier than 'To' time")
      return
    }

    setIsLoading(true)
    try {
      const payload = {
        type: "demo_request",
        name,
        email,
        company,
        message,
        preferred_date, // "YYYY-MM-DD"
        preferred_from_time, // "HH:MM"
        preferred_to_time, // "HH:MM"
        timezone, // IANA tz string
        honeypot,
      }

      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = await response.json().catch(() => null)

      if (response.ok && result && result.success) {
        toast.success("Demo request sent — thank you!")
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          preferred_date: "",
          preferred_from_time: "",
          preferred_to_time: "",
          timezone,
          hp: "",
        })
        setTimeout(() => toggler(), 1400)
      } else {
        toast.error((result && result.message) || "Failed to send. Please try again.")
      }
    } catch (error) {
      console.error("Demo form error:", error)
      toast.error("Failed to send message. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) toggler()
  }
  const handleFormClick = (e: React.MouseEvent) => e.stopPropagation()
  const handleInputFocus = (e: React.FocusEvent) => e.stopPropagation()
  const handleInputClick = (e: React.MouseEvent) => e.stopPropagation()

  return createPortal(
    <motion.div
      className="fixed inset-0 bg-black/50 z-[110] backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        className="w-full mx-auto max-w-[min(92vw,720px)] relative max-h-[90vh]"
        onClick={handleFormClick}
      >
        <Card className="border border-slate-100 shadow-xl bg-white">
          <CardContent className="p-6 overflow-auto" style={{ maxHeight: "calc(90vh - 48px)" }}>
            <div className="relative text-center mb-4">
              <button
                onClick={toggler}
                className="absolute -top-2 -right-2 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
                aria-label="Close demo modal"
                type="button"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Request a <span className="bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] bg-clip-text text-transparent">Demo</span>
              </h2>
              <p className="mt-1 text-sm text-slate-500">Tell us a bit about your needs and a preferred time window.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Request demo form">
              {/* Honeypot - hidden */}
              <input
                name="hp"
                value={formData.hp}
                onChange={(e) => handleInputChange("hp", e.target.value)}
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                style={{ display: "none" }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Name */}
                <div>
                  <label htmlFor="demo-name" className="block text-sm font-medium text-slate-600 mb-1">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                    <Input
                      id="demo-name"
                      ref={firstInputRef}
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="pl-10"
                      disabled={isLoading}
                      required
                      onFocus={handleInputFocus}
                      onClick={handleInputClick}
                      autoComplete="name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="demo-email" className="block text-sm font-medium text-slate-600 mb-1">
                    Your email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                    <Input
                      id="demo-email"
                      type="email"
                      placeholder="youremail@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10"
                      disabled={isLoading}
                      required
                      onFocus={handleInputFocus}
                      onClick={handleInputClick}
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="demo-company" className="block text-sm font-medium text-slate-600 mb-1">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                    <Input
                      id="demo-company"
                      type="text"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="pl-10"
                      disabled={isLoading}
                      required
                      onFocus={handleInputFocus}
                      onClick={handleInputClick}
                      autoComplete="organization"
                    />
                  </div>
                </div>

                {/* Preferred date & times (spans both columns on md) */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-600 mb-1">
                    Preferred date & time <span className="text-red-500">*</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Date */}
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">Date</label>
                      <input
                        type="date"
                        value={formData.preferred_date || ""}
                        onChange={(e) => handleInputChange("preferred_date", e.target.value)}
                        className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={isLoading}
                        required
                      />
                    </div>

                    {/* From time */}
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">From</label>
                      <input
                        type="time"
                        value={formData.preferred_from_time || ""}
                        onChange={(e) => handleInputChange("preferred_from_time", e.target.value)}
                        className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={isLoading}
                        required
                      />
                    </div>

                    {/* To time */}
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">To</label>
                      <input
                        type="time"
                        value={formData.preferred_to_time || ""}
                        onChange={(e) => handleInputChange("preferred_to_time", e.target.value)}
                        className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={isLoading}
                        required
                      />
                    </div>
                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    Timezone: <span className="font-medium">{formData.timezone}</span>
                  </p>
                </div>
              </div>

              {/* Message (full width) */}
              <div>
                <label htmlFor="demo-message" className="block text-xs font-medium text-slate-600 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="demo-message"
                  placeholder="What would you like to cover in the demo?"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  // rows={4}
                  disabled={isLoading}
                  required
                  onFocus={handleInputFocus}
                  onClick={handleInputClick}
                />
                <p className="mt-1 text-xs text-slate-400">A short note helps us tailor the demo (e.g., databases, scale, constraints).</p>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isLoading}
                  onClick={handleInputClick}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                      <span>Sending…</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Request demo</span>
                    </div>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-slate-500">We will reply within 24 hours to confirm the demo.</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>,
    document.body,
  )
}

