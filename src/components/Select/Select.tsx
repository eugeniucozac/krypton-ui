import { memo } from "react";
import { SelectProps } from "./types";
import { Inner, SelectField, HelperText } from "./Select.styles";

const defaultProps: Partial<SelectProps> = {
  required: false,
  disabled: false,
};

export const Select = memo(
  ({
    children,
    value,
    onChange,
    className,
    helperText = "",
    color = "secondary",
    error = false,
    fullWidth = false,
    ...props
  }: SelectProps) => {
    const componentProps = {
      ...defaultProps,
      ...props,
    };

    return (
      <Inner className={className} fullWidth={fullWidth} color={color}>
        <SelectField
          {...componentProps}
          value={value}
          onChange={onChange}
          color={color}
          fullWidth={fullWidth}
        >
          {children}
        </SelectField>
        {helperText && <HelperText>{helperText}</HelperText>}
      </Inner>
    );
  }
);
