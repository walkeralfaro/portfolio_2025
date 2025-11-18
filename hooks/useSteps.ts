import { useState } from "react"

export interface Step {
  title: string;
  description?: string;
  disabled?: boolean;
}

export function useSteps(steps: Step[]) {
  const [currentStep, setCurrentStep] = useState<number>(0)

  const handleNext = async () => {
    setCurrentStep((prev) => Math.min(prev + 1, (steps.length - 1)))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleStepClick = async (stepIndex: number) => {
    if (stepIndex === currentStep || steps[stepIndex].disabled) return

    if (stepIndex < currentStep) {
      setCurrentStep(stepIndex)
      return
    }

    setCurrentStep(stepIndex)
  }

  return {
    currentStep,
    steps: steps.map(step => ({
      description: step.description,
      title: step.title,
      disabled: step.disabled,
    })),
    handleNext,
    handleBack,
    handleStepClick,
  }
}