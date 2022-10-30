import { memo } from "react";
import { InputProps } from "./types";
import { Inner, InputField, HelperText } from "./Input.styles";

const Input = memo(
  ({
    value,
    onChange,
    className,
    beginIcon,
    endIcon,
    helperText,
    type = "text",
    placeholder = "",
    color = "secondary",
    disabled = false,
    error = false,
    fullWidth = false,
    required = false,
    readOnly = false,
    ...props
  }: InputProps) => {
    return (
      <Inner
        className={className}
        type={type}
        fullWidth={fullWidth}
        beginIcon={beginIcon}
        endIcon={endIcon}
      >
        {beginIcon}
        <InputField
          {...props}
          value={value}
          onChange={onChange}
          type={type}
          color={color}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          fullWidth={fullWidth}
          beginIcon={beginIcon}
          endIcon={endIcon}
          readOnly={readOnly}
        />
        {endIcon}
        {helperText && <HelperText>{helperText}</HelperText>}
      </Inner>
    );
  }
);

export default Input;
