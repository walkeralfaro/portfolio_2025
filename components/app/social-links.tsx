import { DiamondPercent, Github, Linkedin, PanelTopOpen } from "lucide-react"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet"

export default function SocialLinks() {

  return (
    <div className="flex items-center">
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger><PanelTopOpen /></SheetTrigger>
          <SheetContent side="top">
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
            <div className="flex justify-center gap-4 items-center py-6">
              <Link href="https://www.linkedin.com/in/walkeralfaro" target="_blank" className="p-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Linkedin className="w-8 h-8" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </Link>

              <Link href="https://github.com/walkeralfaro" target="_blank" className="p-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Github className="w-8 h-8" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github</p>
                  </TooltipContent>
                </Tooltip>
              </Link>

              <Link href="https://www.frontendmentor.io/profile/walkeralfaro" target="_blank" className="p-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DiamondPercent className="w-8 h-8" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>FrontendMentor</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex gap-2 items-center">
        <Link href="https://www.linkedin.com/in/walkeralfaro"  target="_blank" className="p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Linkedin className="w-8 h-8" />
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </Link>


        <Link href="https://github.com/walkeralfaro" target="_blank" className="p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Github className="w-8 h-8" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
        </Link>


        <Link href="https://www.frontendmentor.io/profile/walkeralfaro" target="_blank" className="p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <DiamondPercent className="w-8 h-8" />
            </TooltipTrigger>
            <TooltipContent>
              <p>FrontendMentor</p>
            </TooltipContent>
          </Tooltip>
        </Link>
      </div>
    </div>
  )
}