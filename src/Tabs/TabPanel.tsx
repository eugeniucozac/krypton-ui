import { memo } from "react";
import { TabPanelProps } from "./types";
import { Panel } from "./Tabs.styles";

export const TabPanel = memo(
  ({ children, className, value, reference }: TabPanelProps, props) => {
    return (
      <Panel
        className={className}
        value={value}
        reference={reference}
        {...props}
      >
        <p>{children}</p>
      </Panel>
    );
  }
);
