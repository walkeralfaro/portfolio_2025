import type { Metadata } from "next"
import { Inter, Ramabhadra } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { CloudFusionBackground, } from "@/components/ui/background/color-wave-background"

// Titles fonts
const ramabhadra = Ramabhadra({
  variable: "--font-ramabhadra",
  weight: ["400"],
  subsets: ["latin"]
})

// Body fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Walker Alfaro - Portfolio",
  description: "Portfolio designed and developed by Walker Alfaro",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${ramabhadra.variable} antialiased`}
      >
        <CloudFusionBackground
          light={["#a78bfa", "#f472b6", "#60fae5"]}
          dark={["#6366f1", "#a855f7", "#14b8a6"]}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
  )
}
