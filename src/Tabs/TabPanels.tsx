import React, { memo } from "react";
import { TabPanelsProps } from "./types";
import { Content } from "./Tabs.styles";

export const TabPanels = memo(
  ({ children, activeTab, orientation }: TabPanelsProps, props) => {
    return (
      <Content {...props} orientation={orientation}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { activeTab });
          }
        })}
      </Content>
    );
  }
);
