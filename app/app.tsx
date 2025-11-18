'use client'

import Header from "@/components/app/header"
import MainSection from "@/components/app/main-section"
import { BubbleBackground } from "@/components/ui/background/bubble"
import { LoaderIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const darkColors = {
  first: "99,102,241",
  second: "168,85,247",
  third: "34,197,94",
  fourth: "249,115,22",
  fifth: "252,211,77",
  sixth: "14,165,233"
}

const lightColors = {
  first: "180, 168, 255",
  second: "180, 168, 255",
  third: "180, 168, 255",
  fourth: "180, 168, 255",
  fifth: "180, 168, 255",
  sixth: "180, 168, 255"
}

export default function App() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <>
        <Header />
        <div className="container mx-auto max-w-7xl p-4 mt-60">
          <div className="flex w-full justify-center items-end">
            <LoaderIcon className=" animate-spin" />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <BubbleBackground
        interactive={true}
        colors={theme === 'light' ? lightColors : darkColors}
        className={`absolute inset-0 flex items-center justify-center -z-1 bg-linear-to-br ${theme === 'light' ? 'from-slate-200 to-indigo-100' : 'from-slate-900 to-indigo-900'}`}
      />
      <Header />
      <MainSection />
    </>
  )
}