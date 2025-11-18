import { DiamondPercent, Github, Linkedin, PanelRightOpen } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export default function SocialLinks() {
  return (

    <div className="flex items-center">


      <div className="flex md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger><PanelRightOpen /></DropdownMenuTrigger>
          <DropdownMenuContent side="left" align="start" className="flex justify-between">

            <Link href="#" className="p-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Linkedin className="w-8 h-8" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </Link>


            <Link href="#" className="p-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Github className="w-8 h-8" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>
            </Link>


            <Link href="#" className="p-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <DiamondPercent className="w-8 h-8" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>FrontendMentor</p>
                </TooltipContent>
              </Tooltip>
            </Link>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>



      <div className="hidden md:flex gap-2 items-center">
        <Link href="#" className="p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Linkedin className="w-8 h-8" />
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </Link>


        <Link href="#" className="p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Github className="w-8 h-8" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
        </Link>


        <Link href="#" className="p-2">
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