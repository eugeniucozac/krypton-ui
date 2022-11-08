import { memo } from "react";
import { InputProps } from "./types";
import { Wrapper, InputField, HelperText } from "./Input.styles";

const defaultProps: Partial<InputProps> = {
  placeholder: "",
  disabled: false,
  required: false,
  error: false,
  readOnly: false,
  color: "secondary",
};

const Input = memo(
  ({
    value,
    onChange,
    className,
    beginIcon,
    endIcon,
    helperText,
    type = "text",
    fullWidth = false,
    ...props
  }: InputProps) => {
    const componentProps = {
      ...defaultProps,
      ...props,
    };

    return (
      <Wrapper
        className={className}
        type={type}
        fullWidth={fullWidth}
        beginIcon={beginIcon}
        endIcon={endIcon}
      >
        {beginIcon}
        <InputField
          {...componentProps}
          value={value}
          onChange={onChange}
          type={type}
          fullWidth={fullWidth}
          beginIcon={beginIcon}
          endIcon={endIcon}
        />
        {endIcon}
        {helperText && <HelperText>{helperText}</HelperText>}
      </Wrapper>
    );
  }
);

export default Input;
