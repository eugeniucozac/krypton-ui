import { forwardRef, memo } from "react";
import { SwitchProps } from "./types";
import { Wrapper, Input, Switcher } from "./Switch.styles";

const Component = forwardRef<HTMLInputElement, SwitchProps>(
  (
    { value, className, color = "success", disabled = false, ...props },
    ref
  ) => {
    return (
      <Wrapper className={className} disabled={disabled} color={color}>
        <Input
          {...props}
          ref={ref}
          type="checkbox"
          disabled={disabled}
          checked={value}
        />
        <Switcher color={color} value={value} />
      </Wrapper>
    );
  }
);

const Switch = memo(Component);

export default Switch;
