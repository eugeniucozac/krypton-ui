import { memo } from "react";
import { ChipProps } from "./types";
import { Wrapper, Title } from "./Chip.styles";

const Chip = memo(
  (
    {
      children,
      className,
      color = "secondary",
      size = "md",
      variant = "square",
      disabled = false,
    }: ChipProps,
    props
  ) => {
    return (
      <Wrapper
        {...props}
        className={className}
        variant={variant}
        size={size}
        disabled={disabled}
        color={color}
      >
        <Title color={color}>{children}</Title>
      </Wrapper>
    );
  }
);

export default Chip;
