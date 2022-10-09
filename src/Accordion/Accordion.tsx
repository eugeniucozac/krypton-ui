import React, { memo } from "react";
import { AccordionProps } from "./types";
import { Wrapper } from "./Accordion.styles";

export const Accordion = memo(
  ({ children, value, allowMultiple, onChange, ...props }: AccordionProps) => {
    return (
      <Wrapper {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              value,
              allowMultiple,
              onChange,
            });
          }
        })}
      </Wrapper>
    );
  }
);
