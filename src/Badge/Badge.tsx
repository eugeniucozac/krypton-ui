import { memo } from "react";
import { BadgeProps } from "./types";
import { Wrapper, Value, Dot } from "./Badge.styles";

const Badge = memo(
  (
    {
      children,
      value,
      maxValue,
      color = "primary",
      variant = "default",
      alignment = "top-right",
    }: BadgeProps,
    props
  ) => {
    const [alignmentX, alignmentY] = alignment.split("-");
    return (
      <Wrapper {...props}>
        {children}
        {value ? (
          variant === "default" ? (
            <Value
              variant={variant}
              color={color}
              alignmentX={alignmentX}
              alignmentY={alignmentY}
            >
              {maxValue ? `${maxValue}+` : value}
            </Value>
          ) : (
            <Dot variant={variant} color={color} />
          )
        ) : null}
      </Wrapper>
    );
  }
);

export default Badge;
