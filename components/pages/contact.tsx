'use client'

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Field,
  FieldLabel,
  FieldError,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { ContactForm, contactFormSchema } from "@/schema"
import { sendContactEmail } from "@/app/actions/send"
import { startTransition, useActionState, useEffect } from "react"
import { toast } from "sonner"

const initialState = { success: false, error: null, details: null }

export default function Contact() {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const [state, action] = useActionState(sendContactEmail, initialState)

  useEffect(() => {
    if (state.success) {
      toast.success("Email sending!", {
        position: "top-right",
      })

      form.reset()
    }

    if (state.error) {
      toast.error('Error sending the Email', {
        position: "top-right",
      })
    }
  }, [state, form])

  const onSubmit = (data: ContactForm) => {
    const fd = new FormData();
    fd.append("name", data.name);
    fd.append("email", data.email);
    fd.append("subject", data.subject);
    fd.append("message", data.message);

    startTransition(() => {
      action(fd);
    });
  };

  return (
    <div className="h-full flex flex-col items-start justify-center p-4">
      <div className="w-full max-w-lg mx-auto">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="gap-1">

            <div className="flex gap-4">
              {/* NAME */}
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="relative pb-1">
                    <FieldLabel htmlFor="contact-name">Name</FieldLabel>
                    <Input
                      {...field}
                      id="contact-name"
                      placeholder="Your name"
                      autoComplete="off"
                      aria-invalid={fieldState.invalid}
                    />
                    <div className="h-5">
                      {fieldState.error && (
                        <FieldError
                          errors={[fieldState.error]}
                          className="text-destructive text-sm"
                        />
                      )}
                    </div>
                  </Field>
                )}
              />

              {/* EMAIL */}
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="relative pb-1">
                    <FieldLabel htmlFor="contact-email">E-mail</FieldLabel>

                    <Input
                      {...field}
                      id="contact-email"
                      placeholder="you@example.com"
                      aria-invalid={fieldState.invalid}
                    />

                    <div className="h-5">
                      {fieldState.error && (
                        <FieldError
                          errors={[fieldState.error]}
                          className="text-destructive text-sm"
                        />
                      )}
                    </div>
                  </Field>
                )}
              />
            </div>

            {/* SUBJECT */}
            <Controller
              name="subject"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="relative pb-1">
                  <FieldLabel htmlFor="contact-subject">Subject</FieldLabel>
                  <Input
                    {...field}
                    id="contact-subject"
                    placeholder="How can I help you?"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                  />
                  <div className="h-5">
                    {fieldState.error && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="text-destructive text-sm"
                      />
                    )}
                  </div>
                </Field>
              )}
            />

            {/* MESSAGE */}
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="relative pb-1">
                  <FieldLabel htmlFor="contact-message">Message</FieldLabel>

                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="contact-message"
                      placeholder="Write your message..."
                      className="min-h-32 resize-none"
                      rows={6}
                      aria-invalid={fieldState.invalid}
                    />
                  </InputGroup>

                  <FieldDescription>
                    Max 200 characters. Be as specific as possible.
                  </FieldDescription>

                  <div className="h-5">
                    {fieldState.error && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="text-destructive text-sm"
                      />
                    )}
                  </div>
                </Field>
              )}
            />

          </FieldGroup>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-10">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
