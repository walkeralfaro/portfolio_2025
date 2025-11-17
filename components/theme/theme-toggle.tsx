'use client'

import { Button } from "@/components/ui/button"
import { Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <Button variant="default" onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')} className="cursor-pointer">
        <Moon />
      </Button>
    </div>
  )
}