import { forwardRef, memo } from "react";
import { CheckBoxProps } from "./types";
import { Wrapper, Check, Input } from "./Checkbox.styles";

const defaultProps: Partial<CheckBoxProps> = {
  value: "checkbox",
  name: "checkbox",
};

const Component = forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    { checked, onChange, color = "primary", disabled = false, ...props },
    ref
  ) => {
    const componentProps = {
      ...defaultProps,
      id: defaultProps.name,
      ...props,
    };

    return (
      <Wrapper>
        <Input
          {...componentProps}
          ref={ref}
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

const Checkbox = memo(Component);

export default Checkbox;
