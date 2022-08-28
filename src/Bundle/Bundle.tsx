import { memo } from "react";
import { BundleProps } from "./types";
import { Wrapper, Title } from "./Bundle.styles";

const Bundle = memo(
  (
    {
      children,
      className,
      color = "secondary",
      size = "md",
      variant = "square",
      disabled = false,
    }: BundleProps,
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

export default Bundle;
