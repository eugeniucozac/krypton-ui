import React, { memo } from "react";
import { TabsProps, VariantTabsStyledProps } from "./types";
import { Container } from "./Tabs.styles";

export const Tabs = memo(
  ({ children, activeTab, orientation, alignment, ...props }: TabsProps) => {
    return (
      <Container {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              activeTab,
              orientation,
              alignment,
            } as VariantTabsStyledProps);
          }
        })}
      </Container>
    );
  }
);
