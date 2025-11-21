import Link from "next/link";
import ThemeToggle from "../theme/theme-toggle";
import SocialLinks from "./social-links";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function Header() {
  return (
    <div className="bg-secondary font-ramabhadra shadow-md">
      <nav className="container mx-auto max-w-7xl p-3">
        <div className="flex justify-between items-center">
          <Link href='/' className="text-2xl md:text-3xl font-semibold">Walker Alfaro</Link>
          <div className="flex gap-3 items-center">
            <Tooltip>
              <TooltipTrigger>
                <Link href='https://2023.walkeralfaro.com/' className="hidden md:block text-white p-1 px-2 rounded bg-chart-3" target="_blank">2023</Link>
              </TooltipTrigger>
              <TooltipContent>
                Portfolio 2023's version
              </TooltipContent>
            </Tooltip>
            <SocialLinks />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  )
}