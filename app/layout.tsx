import type { Metadata } from "next";
import { Geo, Inter, Manrope, Open_Sans, Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

// Body fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"]
})

// Titles fonts
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
})

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"]
})

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
        className={`${inter.variable} ${manrope.variable} ${raleway.variable} ${openSans.variable} ${geo.variable} antialiased`}
      >
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-1",
          )}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
