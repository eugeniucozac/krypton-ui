import { memo } from "react";
import { ButtonProps } from "./types";
import { Wrapper } from "./Button.styles";

const Button = memo(
  ({
    children,
    className,
    variant = "square",
    color = "primary",
    model = "default",
    size = "md",
    width = "default",
    disabled = false,
    beginIcon,
    endIcon,
    onClick,
  }: ButtonProps) => {
    return (
      <Wrapper
        className={className}
        color={color}
        size={size}
        variant={variant}
        model={model}
        onClick={onClick}
        width={width}
        disabled={disabled}
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
