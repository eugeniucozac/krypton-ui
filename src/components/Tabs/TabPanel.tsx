import { memo } from "react";
import { TabPanelProps } from "./types";
import { Panel } from "./Tabs.styles";

export const TabPanel = memo(({ children, ...props }: TabPanelProps) => {
  return <Panel {...props}>{children}</Panel>;
});
