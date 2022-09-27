import React, { memo } from "react";
import { AccordionProps } from "./types";
import { Wrapper } from "./Accordion.styles";

export const Accordion = memo(
  ({ children, expandedPanel, onChange }: AccordionProps, props) => {
    return (
      <Wrapper {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { expandedPanel, onChange });
          }
        })}
      </Wrapper>
    );
  }
);
