import Link from "next/link";
import ThemeToggle from "../theme/theme-toggle";
import SocialLinks from "./social-links";

export default function Header() {
  return (
    <div className="bg-secondary font-geo">
      <nav className="container mx-auto max-w-7xl p-6 py-3">
        <div className="flex justify-between items-center">
          <Link href='/' className="text-3xl md:text-4xl font-bold">Walker Alfaro</Link>
          <div className="flex gap-4">
            <SocialLinks />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  )
}