import React, { memo } from "react";
import { AccordionPanelProps } from "./types";
import { Item } from "./Accordion.styles";

export const AccordionItem = memo(
  ({ children, expandedPanel, onChange }: AccordionPanelProps, props) => {
    return (
      <Item {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { expandedPanel, onChange });
          }
        })}
      </Item>
    );
  }
);
