import { memo, useRef, useEffect, useState } from "react";
import { Description, Body } from "./Accordion.styles";
import { AccordionDescriptionProps } from "./types";

export const AccordionDescription = memo(
  ({
    children,
    value,
    index,
    allowMultiple,
    ...props
  }: AccordionDescriptionProps) => {
    const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);
    const bodyRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (allowMultiple && value?.includes(index || 1)) {
        let scrollHeight = bodyRef.current?.scrollHeight;
        setMaxHeight(scrollHeight);
      } else {
        let scrollHeight = value === index ? bodyRef.current?.scrollHeight : 0;
        setMaxHeight(scrollHeight);
      }
    }, [value]);

    return (
      <Description {...props} maxHeight={maxHeight}>
        <Body ref={bodyRef}>{children}</Body>
      </Description>
    );
  }
);
