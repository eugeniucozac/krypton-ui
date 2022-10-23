import React, { memo } from "react";
import { Step } from "./Step";
import { StepperProps } from "./types";
import { Wrapper } from "./Stepper.styles";

export const Stepper = memo(
  ({
    children,
    className,
    activeStep,
    color = "secondary",
    orientation = "horizontal",
    ...props
  }: StepperProps) => {
    return (
      <Wrapper
        {...props}
        className={className}
        color={color}
        orientation={orientation}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <Step
                child={child}
                index={index}
                activeStep={activeStep}
                orientation={orientation}
              />
            );
          }
        })}
      </Wrapper>
    );
  }
);
