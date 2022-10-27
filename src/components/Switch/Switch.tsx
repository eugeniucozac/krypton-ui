import { memo } from "react";
import { SwitchProps } from "./types";
import { Wrapper, Input, Switcher } from "./Switch.styles";

const Switch = memo(
  ({
    value,
    className,
    color = "success",
    disabled = false,
    ...props
  }: SwitchProps) => {
    return (
      <Wrapper className={className} disabled={disabled} color={color}>
        <Input {...props} type="checkbox" disabled={disabled} checked={value} />
        <Switcher color={color} value={value} />
      </Wrapper>
    );
  }
);

export default Switch;
