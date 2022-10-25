import { memo } from "react";
import { SwitchProps } from "./types";
import { Wrapper, Input, Switcher } from "./Switch.styles";

const Switch = memo(
  (
    {
      value,
      className,
      onChange,
      name = "checkbox1",
      color = "success",
      disabled = false,
    }: SwitchProps,
    props
  ) => {
    return (
      <Wrapper
        {...props}
        className={className}
        disabled={disabled}
        color={color}
      >
        <Input
          type="checkbox"
          disabled={disabled}
          name={name}
          checked={value}
          onChange={onChange}
        />
        <Switcher color={color} value={value} />
      </Wrapper>
    );
  }
);

export default Switch;
