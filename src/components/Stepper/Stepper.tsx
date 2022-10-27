import React, { memo } from "react";
import { StepperProps } from "./types";
import { Wrapper } from "./Stepper.styles";

export const Stepper = memo(
  ({
    children,
    activeStep,
    color = "secondary",
    orientation = "horizontal",
    ...props
  }: StepperProps) => {
    return (
      <Wrapper {...props} color={color} orientation={orientation}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              index,
              activeStep,
              orientation,
            });
          }
        })}
      </Wrapper>
    );
  }
);
