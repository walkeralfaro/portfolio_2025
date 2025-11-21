import { useSteps } from "@/hooks/useSteps"
import { Steps } from "../app/steps"
import { BookUser } from "lucide-react"

type AboutProps = {
  onChangeStep: (stepIndex: number) => Promise<void>
}

export default function About({ onChangeStep }: AboutProps) {

  return (
    <div className="w-full mx-auto max-w-xl flex items-center h-full">

      <div className="p-6 space-y-8 font-extralight md:mb-14">
        <BookUser />
        <p>
          I am a Full-Stack Web Developer with over 4 years of experience working with React, Next.js, Node.js, NestJS, and TypeScript, as well as tools like Prisma, Mongoose, Sequelize, and SQL/NoSQL databases.
        </p>

        <p>
          I am an Electronic Engineer graduated from the National University of Callao - Peru, and my background in systems and automation strengthened the technical approach I apply to web development today. I stay up to date with courses in React, TypeScript, and UX/UI design.
        </p>

        <p>
          If you're looking to build or improve a web project, I can help you create a modern, professional, and tailored solution to fit your needs. <button onClick={() => onChangeStep(2)} className="text-blue-600 underline hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700 cursor-pointer">Let's talk</button>.
        </p>

      </div>
    </div>
  )
}