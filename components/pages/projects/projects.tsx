import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import ProjectsChallenges from "./projects-challenges";

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
        <ProjectsChallenges />

      </TabsContent>

      <TabsContent value="demos">

      </TabsContent>
      <TabsContent value="games">

      </TabsContent>
    </Tabs>
  )
}