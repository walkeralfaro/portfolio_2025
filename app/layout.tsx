import type { Metadata } from "next";
import { Candal, Chango, DM_Sans, Geo, Inter, Ramabhadra } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";

// Titles fonts
const candal = Candal({
  variable: "--font-candal",
  weight: ["400"],
  subsets: ["latin"]
})

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${candal.variable} ${ramabhadra.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster richColors  />
      </body>
    </html>
  );
}
