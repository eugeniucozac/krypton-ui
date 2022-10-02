import React, { memo } from "react";
import { TabPanelsProps } from "./types";
import { Content } from "./Tabs.styles";

export const TabPanels = memo(
  ({ children, activeTab, ...props }: TabPanelsProps) => {
    return (
      <Content {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { activeTab });
          }
        })}
      </Content>
    );
  }
);
