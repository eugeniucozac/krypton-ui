import { memo, useRef } from "react";
import { Description, Body } from "./Accordion.styles";
import { AccordionPanelProps } from "./types";

export const AccordionDescription = memo(
  (
    { children, className, expandedPanel, panelId }: AccordionPanelProps,
    props
  ) => {
    const bodyRef = useRef<HTMLDivElement | null>(null);
    const maxHeight =
      expandedPanel === panelId ? bodyRef.current?.scrollHeight : 0;

    return (
      <Description className={className} maxHeight={maxHeight} {...props}>
        <Body ref={bodyRef}>{children}</Body>
      </Description>
    );
  }
);