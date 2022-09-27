import { memo } from "react";
import { TabPanelProps } from "./types";
import { Panel } from "./Tabs.styles";

export const TabPanel = memo(
  ({ children, value, reference }: TabPanelProps, props) => {
    return (
      <Panel value={value} reference={reference} {...props}>
        {children}
      </Panel>
    );
  }
);
