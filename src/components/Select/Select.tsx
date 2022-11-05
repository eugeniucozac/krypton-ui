import { memo } from "react";
import { SelectProps } from "./types";
import { Inner, SelectField, HelperText } from "./Select.styles";

export const Select = memo(
  ({
    children,
    value,
    onChange,
    className,
    helperText = "",
    color = "secondary",
    disabled = false,
    error = false,
    fullWidth = false,
    required = false,
    ...props
  }: SelectProps) => {
    return (
      <Inner className={className} fullWidth={fullWidth} color={color}>
        <SelectField
          {...props}
          value={value}
          onChange={onChange}
          color={color}
          required={required}
          disabled={disabled}
          fullWidth={fullWidth}
        >
          {children}
        </SelectField>
        {helperText && <HelperText>{helperText}</HelperText>}
      </Inner>
    );
  }
);
