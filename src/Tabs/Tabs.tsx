import React, { memo } from "react";
import { TabPanelsProps } from "./types";
import { Container } from "./Tabs.styles";

export const Tabs = memo(
  ({ children, activeTab, orientation, alignment }: TabPanelsProps, props) => {
    return (
      <Container {...props} orientation={orientation} alignment={alignment}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              activeTab,
              orientation,
              alignment,
            });
          }
        })}
      </Container>
    );
  }
);
