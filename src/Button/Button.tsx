import { memo } from "react";
import { ButtonProps } from "./types";
import { Wrapper } from "./Button.styles";

const Button = memo(
  (
    {
      children,
      shape = "square",
      color = "primary",
      variant = "default",
      size = "md",
      fullWidth = false,
      disabled = false,
      beginIcon,
      endIcon,
      onClick,
    }: ButtonProps,
    props
  ) => {
    return (
      <Wrapper
        {...props}
        color={color}
        size={size}
        shape={shape}
        variant={variant}
        fullWidth={fullWidth}
        disabled={disabled}
        onClick={onClick}
        beginIcon={beginIcon}
        endIcon={endIcon}
      >
        {beginIcon}
        {children}
        {endIcon}
      </Wrapper>
    );
  }
);

export default Button;
