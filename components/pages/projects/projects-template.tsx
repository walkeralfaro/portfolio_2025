import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type ProjectsTemplateProps = {
  projects: {
    title: string;
    description: string;
    imageUrl: string;
    imageSmallUrl: string;
    imageAlt: string;
    screenshots: never[];
    technologies: {
      id: string;
      label: string;
      icon: string;
    }[];
    demoUrl: string;
    repoUrl: string;
  }[]
}

export default function ProjectsTemplate({ projects }: ProjectsTemplateProps) {
  return (
    <ScrollArea className="h-[520] md:h-[540]">
      <div className="flex flex-wrap gap-7 px-4 md:p-6">
        {
          projects.map(project => {

            return (
              <Dialog key={project.title}>
                <DialogTrigger asChild className="gap-4 md:gap-6">
                  <Card
                    className="bg-muted py-8 pt-0 w-36 h-44 cursor-pointer shadow-md hover:scale-105 hover:shadow-xl duration-300 overflow-hidden md:w-44 md:h-56"
                  >

                    <div className="w-full h-[86] relative overflow-hidden md:h-[120]">
                      <Image
                        src={project.imageSmallUrl}
                        alt={project.imageAlt}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    <CardContent className="px-4 text-sm md:text-base">
                      {project.title}
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="md:gap-8">
                  <DialogHeader className="gap-4">
                    <DialogTitle>{project.title}</DialogTitle>

                    <DialogDescription>
                      {project.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="md:w-[462px] relative aspect-[400/250]">
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      fill
                      className="object-cover rounded-lg"
                      sizes="462px"
                      priority
                    />
                  </div>
                  <div className="mt-1 mb-3">
                    <h4 className="text-sm font-bold text-muted-foreground">Technologies</h4>
                    <div className="flex gap-3 mt-2">
                      {
                        project.technologies.map((technology, index) => (
                          <Tooltip key={technology.id}>
                            <TooltipTrigger asChild>

                              <div className="w-10 h-10 p-2 rounded-md bg-muted">
                                <div className="relative w-full h-full">
                                  <Image
                                    src={`/icons/${technology.icon}`}
                                    alt={technology.id}
                                    fill
                                    className="object-contain"
                                    priority
                                  />
                                </div>
                              </div>
                              
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{technology.label}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))
                      }
                    </div>

                  </div>

                  <DialogFooter className="flex-row justify-between sm:justify-between">
                    <Button
                      variant="destructive"
                      onClick={() => window.open(`${project.demoUrl}`, "_blank")}
                      className="cursor-pointer"
                    >
                      Live Site <SquareArrowOutUpRight />
                    </Button>
                    <Button
                      variant="secondary"
                      className="bg-muted cursor-pointer"
                      onClick={() => window.open(`${project.repoUrl}`, "_blank")}
                    >
                      View Code <SquareArrowOutUpRight />
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )
          })
        }

      </div>
    </ScrollArea>
  )
}