import { Step } from "@/hooks/useSteps"
import { Button } from "../ui/button"

interface StepProgressProps {
  steps: Step[]
  currentStep: number
  onStepClick: (stepIndex: number) => void
  disabled?: boolean
}

export default function StepProgress({ steps, currentStep, onStepClick, disabled }: StepProgressProps) {

  return (
    <div className="flex justify-between md:flex-col md:gap-4">

      {
        steps.map((step, index) => (
          <div key={step.title}>
            <Button
              type="button"
              disabled={disabled}
              onClick={() => onStepClick(index)}
              className={`${currentStep !== index && 'bg-secondary hover:bg-secondary text-foreground'} cursor-pointer transition-transform duration-200 hover:-translate-y-1 p-8 shadow-md/20 md:w-[140] md:h-[90]`}
            >
              {step.title}
            </Button>

          </div>
        ))
      }

    </div>
  )
}