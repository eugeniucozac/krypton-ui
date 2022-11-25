import { forwardRef, memo } from "react";
import { RadioProps } from "./types";
import { Wrapper, Choose, Input, Label } from "./Radio.styles";

const Component = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      checked,
      onChange,
      label = "",
      color = "primary",
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <Wrapper className={className}>
        <Input
          {...props}
          ref={ref}
          type="radio"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <Choose checked={checked} disabled={disabled} color={color} />
        <Label>{label}</Label>
      </Wrapper>
    );
  }
);

const Radio = memo(Component);

export default Radio;
