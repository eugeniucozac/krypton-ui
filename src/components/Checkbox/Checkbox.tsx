import { memo } from "react";
import { CheckBoxProps } from "./types";
import { Wrapper, Check, Input } from "./Checkbox.styles";

const defaultProps: Partial<CheckBoxProps> = {
  value: "checkbox",
  name: "checkbox",
};

const Checkbox = memo(
  ({
    checked,
    onChange,
    color = "primary",
    disabled = false,
    ...props
  }: CheckBoxProps) => {
    const componentProps = {
      ...defaultProps,
      id: defaultProps.name,
      ...props,
    };

    return (
      <Wrapper>
        <Input
          {...componentProps}
          type="checkbox"
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
