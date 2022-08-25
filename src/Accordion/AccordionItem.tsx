import React, { memo, ReactNode } from "react";
import { AccordionPanelProps } from "./types";
import { Item } from "./Accordion.styles";

export const AccordionItem = memo(
  (
    { children, className, expandedPanel, onChange }: AccordionPanelProps,
    props
  ) => {
    return (
      <Item className={className} {...props}>
        {React.Children.map<ReactNode, ReactNode>(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { expandedPanel, onChange });
          }
        })}
      </Item>
    );
  }
);
