import { memo } from "react";
import { TabPanelProps } from "./types";
import { Panel } from "./Tabs.styles";

export const TabPanel = memo(
  ({ children, activeTab, index }: TabPanelProps, props) => {
    return (
      <Panel {...props} activeTab={activeTab} index={index}>
        {children}
      </Panel>
    );
  }
);
