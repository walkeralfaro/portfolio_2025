'use server'

import { EmailTemplate } from "@/components/email/email-template"
import { contactFormSchema } from "@/schema"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(prevState: any, formData: FormData) {
  // 1. Convertimos el formData → objeto plano
  const data = Object.fromEntries(formData.entries())

  // 2. Validación con Zod
  const parsed = contactFormSchema.safeParse(data)

  if (!parsed.success) {
    return {
      success: false,
      error: "No se pudo enviar el correo.",
      details: parsed.error,
    }
  }

  const { name, email, subject, message } = parsed.data

  try {
    const { error } = await resend.emails.send({
      from: "Contacto Portfolio <contacto@walkeralfaro.com>",
      to: "contact.walkeralfaro@gmail.com",
      replyTo: email,
      cc: email,
      subject,
      react: EmailTemplate({ name, email, message }),
    })

    if (error) {
      console.error("RESEND ERROR:", error)

      return {
        success: false,
        error: "No se pudo enviar el correo.",
        details: error,
      }
    }

    return { success: true, error: null, details: null }

  } catch (err) {
    console.error(err)
    return { success: false, error: "Error inesperado." }
  }
}
