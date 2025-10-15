
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
import useContactContext from "@/hooks/useContactContext"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactUs() {
  const { openContact: openModal, setOpenContact: setOpenModal, toggleContact: toggler } = useContactContext()
  const modalRef = useRef<HTMLDivElement | null>(null)
  const lenis = useLenis()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement

      // Don't close if clicking on form elements or their children
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

      // Don't close if the target is inside the modal
      if (modalRef.current && !modalRef.current.contains(target)) {
        setOpenModal(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenModal(false)
      }
    }

    if (openModal) {
      lenis?.stop()

      // Add a small delay to prevent immediate closing
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

  return <AnimatePresence>{openModal && <ContactUsModal toggler={toggler} ref={modalRef} />}</AnimatePresence>
}

function ContactUsModal({ toggler, ref }: { toggler: () => void; ref?: React.Ref<HTMLDivElement> }) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields")
      return
    }

    if (formData.subject.length < 5) {
      toast.error("Subject should be atleast 5 characters!!")
      return
    }

    if (formData.message.length < 10) {
      toast.error("Message should be atleast 10 characters!!")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast.success("Message sent successfully! Thank you for contacting us.")
        setFormData({ name: "", email: "", subject: "", message: "" })

        // Close modal after a short delay to show the success message
        setTimeout(() => {
          toggler()
        }, 1500)
      } else {
        toast.error(result.message || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      toast.error("Failed to send message. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking directly on the backdrop
    if (e.target === e.currentTarget) {
      toggler()
    }
  }

  const handleFormClick = (e: React.MouseEvent) => {
    // Prevent any clicks inside the form from bubbling up
    e.stopPropagation()
  }

  const handleInputFocus = (e: React.FocusEvent) => {
    e.stopPropagation()
  }

  const handleInputClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return createPortal(
    <motion.div
      className="fixed inset-0 bg-black/50 z-[110] backdrop-blur-sm flex items-center justify-center p-4 overflow-y-scroll"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full md:max-w-sm lg:max-w-md relative max-h-[90vh]"
        onClick={handleFormClick}
      >
        <Card className="border border-gray-200 shadow-xl bg-white">
          <CardContent className="px-6">
            
            <div className="text-center mb-6 relative">
              <button
                onClick={toggler}
                className="absolute -top-2 -right-2 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                aria-label="Close"
                type="button"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="lg:text-xl md:text-lg font-bold text-gray-900">Contact Us</h2>
              <p className="md:text-sm lg:text-md text-gray-600 mt-2">Have questions? We&apos;d love to hear from you.</p>
            </div>

            
            <form onSubmit={handleSubmit} className="space-y-4" onClick={handleFormClick}>
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="Enter your full name"
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

              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="Enter your email"
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

              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  <Input
                    id="contact-subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="pl-10"
                    disabled={isLoading}
                    required
                    onFocus={handleInputFocus}
                    onClick={handleInputClick}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  // rows={4}
                  disabled={isLoading}
                  required
                  onFocus={handleInputFocus}
                  onClick={handleInputClick}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isLoading}
                onClick={handleInputClick}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>

            
            <div className="mt-4 lg:mt-6 text-center">
              <p className="md:text-sm lg:text-md text-gray-500">We&apos;ll get back to you within 24 hours.</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>,
    document.body,
  )
}
