import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function SocialLinks() {
  return (
    <div className="flex gap-3 items-center">
      <Link href='#' className=""><Linkedin /></Link>
      <Link href='#'><Github /></Link>
    </div>
  )
}