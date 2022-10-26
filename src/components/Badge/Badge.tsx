import { memo } from "react";
import { BadgeProps } from "./types";
import { Wrapper, Value, Dot } from "./Badge.styles";

const Badge = memo(
  ({
    children,
    value,
    maxValue,
    color = "primary",
    variant = "default",
    alignment = "top-right",
    showZero = false,
    ...props
  }: BadgeProps) => {
    const [alignX, alignY] = alignment.split("-");
    return (
      <Wrapper {...props}>
        {children}
        {value || showZero ? (
          variant === "default" ? (
            <Value
              variant={variant}
              color={color}
              alignX={alignX}
              alignY={alignY}
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
