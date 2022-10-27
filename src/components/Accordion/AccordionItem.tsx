import React, { memo, useState } from "react";
import { AccordionPanelProps } from "./types";
import { Item } from "./Accordion.styles";
import { AccordionAction } from "./AccordionAction";

export const AccordionItem = memo(
  ({ children, value, index, onChange, allowMultiple, ...props }: any) => {
    return (
      <Item {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return (
              <AccordionAction
                child={child}
                value={value}
                index={index}
                allowMultiple={allowMultiple}
                onChange={onChange}
              />
            );
          }
        })}
      </Item>
    );
  }
);
