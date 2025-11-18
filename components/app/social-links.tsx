import { DiamondPercent, Github, Linkedin, PanelRightOpen } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export default function SocialLinks() {
  return (

    <div className="flex items-center">

      <DropdownMenu>
        <DropdownMenuTrigger><PanelRightOpen /></DropdownMenuTrigger>
        <DropdownMenuContent side="left" align="center" className="flex justify-between">
          <Link href="#" className="p-2">
            <Linkedin className="w-8 h-8" />
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
            <DiamondPercent className="w-8 h-8" />
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Github</p>
        </TooltipContent>
      </Tooltip> */}

      <div className="hidden md:flex gap-2 items-center">
        <Link href='#'><Linkedin className="w-11 h-11" /></Link>
        <Link href='#'><Github /></Link>
        <Link href='#'><Github /></Link>
      </div>
    </div>
  )
}