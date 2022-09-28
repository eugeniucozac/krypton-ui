import React, { memo } from "react";
import { TabsContainerProps } from "./types";
import { Content } from "./Tabs.styles";

export const TabContent = memo(
  ({ children, value, variant }: TabsContainerProps, props) => {
    return (
      <Content {...props} variant={variant}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { value });
          }
        })}
      </Content>
    );
  }
);
