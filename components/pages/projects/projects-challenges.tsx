import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { projects } from "./projects-list";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function ProjectsChallenges() {
  return (
    <ScrollArea className="h-[440] md:h-[540]">
      <div className="flex flex-wrap gap-7 px-4 md:p-6">
        {
          projects.challenges.map(challenge => {

            return (
              <Dialog key={challenge.title}>
                <DialogTrigger asChild className="gap-4 md:gap-6">
                  <Card
                    className="bg-muted py-8 pt-0 w-36 h-44 cursor-pointer shadow-md hover:scale-105 hover:shadow-xl duration-300 overflow-hidden md:w-44 md:h-56"
                  >

                    <img
                      src={challenge.imageSmallUrl}
                      alt={challenge.imageAlt}
                      className="w-full h-full object-cover"
                    />

                    <CardContent className="px-4 text-sm md:text-base">
                      {challenge.title}
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="gap-4">
                    <DialogTitle>{challenge.title}</DialogTitle>

                    <DialogDescription>
                      {challenge.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="">
                    <img
                      src={challenge.imageUrl}
                      alt={challenge.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-1 mb-3">
                    <h4 className="text-sm font-bold text-muted-foreground">Technologies</h4>
                    <div className="flex gap-3 mt-2">
                      {
                        challenge.technologies.map((technology, index) => (
                          <div key={technology.id} className="w-10 h-10 p-2 rounded-md bg-muted">
                            <img src={`/icons/${technology.icon}`} alt={technology.id} />
                          </div>
                        ))
                      }
                    </div>

                  </div>

                  <DialogFooter className="flex-row justify-between sm:justify-between">
                    <Button
                      variant="destructive"
                      onClick={() => window.open(`${challenge.demoUrl}`, "_blank")}
                    >
                      Live Site <SquareArrowOutUpRight />
                    </Button>
                    <Button
                      variant="secondary"
                      className="bg-muted" onClick={() => window.open(`${challenge.repoUrl}`, "_blank")}
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