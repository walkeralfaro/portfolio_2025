'use client'

import { useMemo } from "react"
import { useSteps } from "@/hooks/useSteps"
import { Steps } from "./steps"
import StepProgress from "./step-progress"
import About from "../pages/about"
import Projects from "../pages/projects/projects"
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
    <>
      <div className="container mx-auto max-w-7xl p-3 font-inter">

        <div className="flex flex-col gap-4 md:mt-12 md:flex-row md:gap-8">
          <div>
            <StepProgress currentStep={currentStep} onStepClick={handleStepClick} steps={steps} />
          </div>

          <div className="bg-secondary h-[540] md:h-[650] rounded-2xl shadow-md/20 grow">
            {renderStep}
          </div>
        </div>
      </div>
    </>
  )
}