import { memo } from "react";
import { BadgeProps, AlignmentPosition } from "./types";
import { Wrapper, Value, Dot } from "./Badge.styles";

const Badge = memo(
  (
    {
      children,
      className,
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
      <Wrapper {...props} className={className}>
        {children}
        {value ? (
          variant === "default" ? (
            <Value
              variant={variant}
              color={color}
              alignmentX={alignmentX as AlignmentPosition}
              alignmentY={alignmentY as AlignmentPosition}
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
