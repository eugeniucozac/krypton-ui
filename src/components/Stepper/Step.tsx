import { memo } from "react";
import Icon from "../Icon";
import {
  StepLine,
  StepItem,
  StepIcon,
  StepTitle,
  StepStatus,
  StepLabel,
  StepWrapper,
} from "./Stepper.styles";
import { StepProps } from "./types";

export const Step = memo(
  ({
    step,
    orientation = "horizontal",
    activeStep = 1,
    index = 0,
    showStatus = true,
    completed = <Icon name="check" />,
    progress = <Icon name="file" />,
    pending = <Icon name="https" />,
  }: StepProps) => {
    const currentStep = index + 1;

    let defaultIcon = completed;
    let status = "Completed";
    if (activeStep === currentStep) {
      defaultIcon = progress;
      status = "Progress";
    } else if (currentStep > activeStep) {
      defaultIcon = pending;
      status = "Pending";
    }

    return (
      <>
        <StepItem orientation={orientation}>
          <StepIcon orientation={orientation} status={status}>
            {defaultIcon}
          </StepIcon>
          <StepWrapper orientation={orientation}>
            <StepLabel status={status}>Step {currentStep}</StepLabel>
            <StepTitle status={status}>{step?.label}</StepTitle>
          </StepWrapper>
          {orientation === "horizontal" && showStatus && (
            <StepStatus status={status}>{status}</StepStatus>
          )}
        </StepItem>
        <StepLine status={status} orientation={orientation} />
      </>
    );
  }
);
