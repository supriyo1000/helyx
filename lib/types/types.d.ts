export interface emailFormType {
  success?: boolean
  error?: {
    name?: string
    email?: string
    subject?: string
    message?: string
  }
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
