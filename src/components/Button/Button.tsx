import { forwardRef, memo } from "react";
import { ButtonProps } from "./types";
import { Wrapper } from "./Button.styles";

const defaultProps: Partial<ButtonProps> = {
  shape: "square",
  color: "primary",
  variant: "default",
  size: "md",
  fullWidth: false,
  disabled: false,
};

const Component = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, beginIcon, endIcon, ...props }, ref) => {
    const componentProps = {
      ...defaultProps,
      ...props,
    };

    return (
      <Wrapper
        {...componentProps}
        ref={ref}
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

const Button = memo(Component);

export default Button;
