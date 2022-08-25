import React, { memo, ReactNode } from "react";
import { AccordionProps } from "./types";
import { Wrapper } from "./Accordion.styles";

export const Accordion = memo(
  ({ children, className, expandedPanel, onChange }: AccordionProps, props) => {
    return (
      <Wrapper className={className} {...props}>
        {React.Children.map<ReactNode, ReactNode>(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { expandedPanel, onChange });
          }
        })}
      </Wrapper>
    );
  }
);
