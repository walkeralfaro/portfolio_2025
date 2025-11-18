import type { Metadata } from "next";
import { Geo, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

// Body fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

// Titles fonts
const geo = Geo({
  variable: "--font-geo",
  weight: ['400']
})

export const metadata: Metadata = {
  title: "Walker Alfaro Portfolio",
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
        className={`${inter.variable} ${geo.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
