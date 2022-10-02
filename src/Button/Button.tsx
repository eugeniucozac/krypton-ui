import { memo } from "react";
import { ButtonProps } from "./types";
import { Wrapper } from "./Button.styles";

export const defaultProps: Partial<ButtonProps> = {
  shape: "square",
  color: "primary",
  variant: "default",
  size: "md",
  fullWidth: false,
  disabled: false,
};

const Button = memo(
  ({ children, beginIcon, endIcon, ...props }: ButtonProps) => {
    const componentProps: ButtonProps = {
      ...defaultProps,
      ...props,
    };

    return (
      <Wrapper {...componentProps} beginIcon={beginIcon} endIcon={endIcon}>
        {beginIcon}
        {children}
        {endIcon}
      </Wrapper>
    );
  }
);

export default Button;
