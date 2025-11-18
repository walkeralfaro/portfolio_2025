"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface CloudFusionBackgroundProps {
  light: [string, string, string]
  dark: [string, string, string]
}

export function CloudFusionBackground({ light, dark }: CloudFusionBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // para evitar hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Mientras no está montado, no renderizamos nada del fondo
    return <div className="absolute inset-0 -z-10 bg-transparent" />
  }

  const colors = theme === "dark" ? dark : light

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="cloud cloud-1"
        style={{
          background: `radial-gradient(circle at center, ${colors[0]} 0%, transparent 60%)`,
        }}
      />
      <div
        className="cloud cloud-2"
        style={{
          background: `radial-gradient(circle at center, ${colors[1]} 0%, transparent 60%)`,
        }}
      />
      <div
        className="cloud cloud-3"
        style={{
          background: `radial-gradient(circle at center, ${colors[2]} 0%, transparent 60%)`,
        }}
      />
    </div>
  )
}
