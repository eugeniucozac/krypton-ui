import { memo, useRef } from "react";
import { Description, Body } from "./Accordion.styles";
import { AccordionPanelProps } from "./types";

export const AccordionDescription = memo(
  ({ children, value, panelId, ...props }: AccordionPanelProps) => {
    const bodyRef = useRef<HTMLDivElement | null>(null);
    const maxHeight = value === panelId ? bodyRef.current?.scrollHeight : 0;

    return (
      <Description {...props} maxHeight={maxHeight}>
        <Body ref={bodyRef}>{children}</Body>
      </Description>
    );
  }
);
