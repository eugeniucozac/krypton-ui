import React, { memo, ReactNode } from "react";
import { TabsProps } from "./types";
import { Wrapper } from "./Tabs.styles";

export const Tabs = memo(
  (
    {
      children,
      value,
      className,
      onChange,
      variant = "horizontal",
      tabsAlign = "left",
      color = "primary",
    }: TabsProps,
    props
  ) => {
    return (
      <Wrapper
        className={className}
        {...props}
        tabsAlign={tabsAlign}
        variant={variant}
      >
        {React.Children.map<ReactNode, ReactNode>(children, (child, iter) => {
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
