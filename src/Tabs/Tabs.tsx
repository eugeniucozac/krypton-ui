import React, { memo } from "react";
import { TabsProps } from "./types";
import { Wrapper } from "./Tabs.styles";

export const Tabs = memo(
  (
    {
      children,
      value,
      onChange,
      variant = "horizontal",
      tabsAlign = "left",
      color = "primary",
    }: TabsProps,
    props
  ) => {
    return (
      <Wrapper {...props} tabsAlign={tabsAlign} variant={variant}>
        {React.Children.map(children, (child, iter) => {
          if (React.isValidElement(child)) {
            const index = iter + 1;
            return React.cloneElement(child, {
              active: value === index,
              color,
              variant,
              onChange,
              value: index,
              tabsAlign,
            });
          }
        })}
      </Wrapper>
    );
  }
);
