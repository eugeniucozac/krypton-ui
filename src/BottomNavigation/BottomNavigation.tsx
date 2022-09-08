import React, { memo, ReactNode } from "react";
import { BottomNavigationProps } from "./types";
import { Wrapper } from "./BottomNavigation.styles";

export const BottomNavigation = memo(
  (
    {
      children,
      className,
      value,
      color = "primary",
      onChange,
    }: BottomNavigationProps,
    props
  ) => {
    return (
      <Wrapper {...props} className={className}>
        {React.Children.map<ReactNode, ReactNode>(children, (child, iter) => {
          const active = value === iter + 1;
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              value,
              onChange,
              active,
              color,
              iter: iter + 1,
            });
          }
        })}
      </Wrapper>
    );
  }
);
