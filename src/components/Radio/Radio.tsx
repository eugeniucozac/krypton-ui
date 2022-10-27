import { memo } from "react";
import { RadioProps } from "./types";
import { Wrapper, Choose, Input, Label } from "./Radio.styles";

const Radio = memo(
  ({
    className,
    checked,
    value,
    onChange,
    label = "",
    color = "primary",
    disabled = false,
    ...props
  }: RadioProps) => {
    return (
      <Wrapper className={className}>
        <Input
          {...props}
          type="radio"
          name={value}
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

export default Radio;
