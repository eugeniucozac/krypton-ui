import React, { memo, ReactNode } from "react";
import { TabsContainerProps } from "./types";
import { Content } from "./Tabs.styles";

export const TabContent = memo(
  ({ children, className, value, variant }: TabsContainerProps, props) => {
    return (
      <Content className={className} variant={variant} {...props}>
        {React.Children.map<ReactNode, ReactNode>(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { value });
          }
        })}
      </Content>
    );
  }
);
