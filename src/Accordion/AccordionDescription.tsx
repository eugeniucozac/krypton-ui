import { memo, useRef, useEffect } from "react";
import { Description, Body } from "./Accordion.styles";
import { AccordionPanelProps } from "./types";

export const AccordionDescription = memo(
  ({ children, value, index, show, allowMultiple, ...props }: any) => {
    // AccordionPanelProps
    const bodyRef = useRef<HTMLDivElement | null>(null);

    // console.log("allowMultiple ", allowMultiple);

    var maxHeight = value === index ? bodyRef.current?.scrollHeight : 0;

    if (allowMultiple) {
      maxHeight = show ? bodyRef.current?.scrollHeight : 0;
    }

    return (
      <Description {...props} maxHeight={maxHeight}>
        <Body ref={bodyRef}>{children}</Body>
      </Description>
    );
  }
);
