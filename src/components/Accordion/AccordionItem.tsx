import React, { memo } from "react";
import { AccordionItemProps } from "./types";
import { Item } from "./Accordion.styles";

export const AccordionItem = memo(
  ({
    children,
    value,
    index,
    allowMultiple,
    onChange,
    ...props
  }: AccordionItemProps) => {
    return (
      <Item {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              allowMultiple,
              index,
              value,
              onChange,
            });
          }
        })}
      </Item>
    );
  }
);
