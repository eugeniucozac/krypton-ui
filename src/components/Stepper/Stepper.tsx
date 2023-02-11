import React, { memo } from "react";
import { StepperProps, StepProps } from "./types";
import { Wrapper } from "./Stepper.styles";

const defaultProps: Partial<StepperProps> = {
  color: "secondary",
};

export const Stepper = memo(
  ({
    children,
    activeStep,
    completed,
    progress,
    pending,
    color = "secondary",
    orientation = "horizontal",
    ...props
  }: StepperProps) => {
    const componentProps = {
      ...defaultProps,
      ...props,
    };

    return (
      <Wrapper {...componentProps} orientation={orientation}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              index,
              activeStep,
              orientation,
              completed,
              progress,
              pending,
            } as StepProps);
          }
        })}
      </Wrapper>
    );
  }
);
