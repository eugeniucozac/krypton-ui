import { memo } from "react";
import { AccordionDescriptionProps } from "./types";
import { Description, Body } from "./Accordion.styles";

export const AccordionDescription = memo(
  ({
    children,
    value,
    index,
    allowMultiple,
    bodyRef,
    maxHeight,
    ...props
  }: AccordionDescriptionProps) => {
    return (
      <Description {...props} maxHeight={maxHeight}>
        <Body ref={bodyRef}>{children}</Body>
      </Description>
    );
  }
);
