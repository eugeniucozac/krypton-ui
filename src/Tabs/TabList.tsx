import React, { memo } from "react";
import { TabListProps } from "./types";
import { Wrapper } from "./Tabs.styles";

export const TabList = memo(
  (
    {
      children,
      activeTab,
      onChange,
      orientation = "horizontal",
      alignment = "left",
      color = "primary",
    }: TabListProps,
    props
  ) => {
    return (
      <Wrapper {...props} alignment={alignment} orientation={orientation}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              active: activeTab === child.props.value,
              color,
              orientation,
              onChange,
              activeTab: child.props.value,
              alignment,
            });
          }
        })}
      </Wrapper>
    );
  }
);
