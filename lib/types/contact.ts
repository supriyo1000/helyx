export interface ContactMessage {
  id: number
  name: string
  email: string
  subject: string
  message: string
  status: "new" | "read" | "replied" | "archived"
  ip_address: string | null
  user_agent: string | null
  created_at: string
  updated_at: string
}

export interface CreateContactMessageResult {
  message_id: number | null
  success: boolean
  message: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
