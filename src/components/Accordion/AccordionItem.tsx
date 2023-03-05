import React, { memo, useEffect, useRef, useState } from "react";
import { AccordionItemProps } from "./types";
import { Item } from "./Accordion.styles";

export const AccordionItem = memo(
  ({
    children,
    allowMultiple,
    value = [],
    index = 1,
    closeIcon = "plus",
    openIcon = "minus",
    onChange = () => {},
    color = "rgb(0, 0, 0)",
    ...props
  }: AccordionItemProps) => {
    let icon = closeIcon;
    const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);
    const bodyRef = useRef<HTMLDivElement | null>(null);

    if (value === index || (allowMultiple && value?.includes(index))) {
      icon = openIcon;
    }

    useEffect(() => {
      if (allowMultiple && value?.includes(index || 1)) {
        let scrollHeight = bodyRef.current?.scrollHeight;
        setMaxHeight(scrollHeight);
      } else {
        let scrollHeight = value === index ? bodyRef.current?.scrollHeight : 0;
        setMaxHeight(scrollHeight);
      }
    }, [allowMultiple, index, value]);

    const handleChange = () => {
      if (allowMultiple) {
        let updateValues = [...value, index];
        if (value.includes(index)) {
          updateValues = updateValues.filter((item) => item !== index);
        }
        onChange(updateValues);
      } else {
        onChange(index);
      }
    };

    return (
      <Item {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              handleChange,
              color,
              allowMultiple,
              icon,
              index,
              value,
              bodyRef,
              maxHeight,
            } as AccordionItemProps);
          }
        })}
      </Item>
    );
  }
);
