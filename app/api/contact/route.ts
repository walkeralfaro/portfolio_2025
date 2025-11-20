import { EmailTemplate } from "@/components/email/email-template"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(1, { message: "Invalid name" }),
  subject: z.string().min(1, { message: "Invalid subject" }),
  email: z.email({ message: "Invalid e-mail" }),
  message: z.string().min(5, { message: "Invalid message" }),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const parsed = schema.safeParse(json)

    if (!parsed.success) {
      const tree = z.treeifyError(parsed.error);

      return Response.json(
        { error: "Datos inválidos", details: tree },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["contact.walkeralfaro@gmail.com"],
      subject: "Nuevo mensaje desde tu portfolio",
      react: EmailTemplate({ name, email, message }),
    })

    if (error) return Response.json({ error }, { status: 500 })

    return Response.json({ success: true, data })
  } catch (e) {
    return Response.json({ error: "Server error" }, { status: 500 })
  }
}
