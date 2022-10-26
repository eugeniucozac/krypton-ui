import { memo } from "react";
import Icon from "../Icon";
import { IconName } from "../Icon/types";
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
    orientation,
    activeStep,
    index,
    child: {
      props: { label },
    },
  }: any) => {
    const step = index + 1;
    var icon = "check";
    var status = "Completed";
    if (activeStep === step) {
      icon = "file";
      status = "Progress";
    } else if (step > activeStep) {
      icon = "https";
      status = "Pending";
    }

    return (
      <>
        <StepItem orientation={orientation}>
          <StepIcon orientation={orientation} status={status}>
            <Icon name={icon as IconName} />
          </StepIcon>
          <StepWrapper orientation={orientation}>
            <StepLabel status={status}>Step {step}</StepLabel>
            <StepTitle status={status}>{label}</StepTitle>
          </StepWrapper>
          {orientation === "horizontal" && (
            <StepStatus status={status}>{status}</StepStatus>
          )}
        </StepItem>
        <StepLine status={status} orientation={orientation} />
      </>
    );
  }
);
