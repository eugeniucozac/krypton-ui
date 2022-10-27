import React, { memo } from "react";
import { AccordionProps } from "./types";
import { Wrapper } from "./Accordion.styles";

const defaultProps: Partial<AccordionProps> = {
  allowMultiple: false,
};

export const Accordion = memo(
  ({
    children,
    value,
    allowMultiple = false,
    onChange,
    ...props
  }: AccordionProps) => {
    const componentProps = {
      ...defaultProps,
      ...props,
    };

    return (
      <Wrapper {...componentProps}>
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
