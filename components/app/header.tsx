import Link from "next/link";
import ThemeToggle from "../theme/theme-toggle";
import SocialLinks from "./social-links";

export default function Header() {
  return (
    <div className="bg-secondary font-geo shadow-md">
      <nav className="container mx-auto max-w-7xl p-3">
        <div className="flex justify-between items-center">
          <Link href='/' className="text-3xl md:text-4xl font-bold">Walker Alfaro</Link>
          <div className="flex gap-3">
            <SocialLinks />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  )
}