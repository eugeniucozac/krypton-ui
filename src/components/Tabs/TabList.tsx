import React, { memo } from "react";
import { TabListProps, TabsVariantsProps } from "./types";
import { Wrapper } from "./Tabs.styles";

export const TabList = memo(
  ({
    children,
    activeTab,
    onChange,
    orientation = "horizontal",
    alignment = "left",
    color = "primary",
    ...props
  }: TabListProps) => {
    return (
      <Wrapper {...props} alignment={alignment} orientation={orientation}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              active: activeTab === child.props.value,
              color,
              orientation,
              activeTab: child.props.value,
              alignment,
              onChange,
            } as TabsVariantsProps);
          }
        })}
      </Wrapper>
    );
  }
);
