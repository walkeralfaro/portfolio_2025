import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs"
import ProjectsTemplate from "./projects-template"
import {projects} from "./projects-list"

export default function Projects() {
  return (
    <Tabs defaultValue="challenges">
      <div className="p-4">
        <TabsList>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="demos">Demos</TabsTrigger>
          <TabsTrigger value="games">Games</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="challenges">
        <ProjectsTemplate projects={projects.challenges} />
      </TabsContent>

      <TabsContent value="demos">
        <ProjectsTemplate projects={projects.demos} />
      </TabsContent>

      <TabsContent value="games">
        <ProjectsTemplate projects={projects.games} />
      </TabsContent>
    </Tabs>
  )
}