import { memo } from "react";
import { CheckBoxProps } from "./types";
import { Wrapper, Check, Input } from "./Checkbox.styles";

const Checkbox = memo(
  ({
    checked,
    onChange,
    value = "checkbox",
    name = "checkbox",
    color = "primary",
    disabled = false,
    ...props
  }: CheckBoxProps) => {
    return (
      <Wrapper>
        <Input
          {...props}
          type="checkbox"
          value={value}
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <Check checked={checked} disabled={disabled} color={color} />
      </Wrapper>
    );
  }
);

export default Checkbox;
