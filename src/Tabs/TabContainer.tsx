import React, { memo, ReactNode } from "react";
import { TabsContainerProps } from "./types";
import { Container } from "./Tabs.styles";

export const TabContainer = memo(
  (
    { children, className, value, variant, tabsAlign }: TabsContainerProps,
    props
  ) => {
    return (
      <Container
        className={className}
        variant={variant}
        tabsAlign={tabsAlign}
        {...props}
      >
        {React.Children.map<ReactNode, ReactNode>(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { value, variant, tabsAlign });
          }
        })}
      </Container>
    );
  }
);
