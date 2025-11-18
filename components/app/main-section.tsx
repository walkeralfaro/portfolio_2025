'use client'

import { useSteps } from "@/hooks/useSteps"
import { Steps } from "./steps"
import StepProgress from "./step-progress"
import { useMemo } from "react"
import About from "../pages/about"
import Projects from "../pages/projects"
import Contact from "../pages/contact"

export default function MainSection() {

  const { currentStep, handleStepClick, steps } = useSteps(Steps)

  const renderStep = useMemo(() => {

    switch (currentStep) {
      case 0:
        return <About />
      case 1:
        return <Projects />
      case 2:
        return <Contact />
      default:
        return null
    }

  }, [currentStep])

  return (
    <div className="container mx-auto max-w-7xl p-3 font-inter">

      <div>
        <StepProgress currentStep={currentStep} onStepClick={handleStepClick} steps={steps} />

      </div>

      <div className="bg-secondary h-[500] rounded-2xl mt-4 p-6 shadow-md/20">
        {renderStep}
      </div>


    </div>
  )
}