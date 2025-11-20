import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "At least 2 characters." })
    .max(30, { message: "Max 30 characters." })
    .regex(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/, {
      message: "Only letters and spaces.",
    }),

  subject: z
    .string()
    .min(2, { message: "Minimum 2 characters." })
    .max(50, { message: "Max 50 characters." }),

  email: z
    .email({ message: "Invalid email." })
    .max(50, { message: "Max 50 characters." }),

  message: z
    .string()
    .min(10, { message: "Minimum 10 characters." })
    .max(200, { message: "Max 200 characters." }),
});


export type ContactForm = z.infer<typeof contactFormSchema>;
