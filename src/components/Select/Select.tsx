import { forwardRef, memo } from "react";
import { SelectProps } from "./types";
import { Inner, SelectField, HelperText } from "./Select.styles";

const defaultProps: Partial<SelectProps> = {
  required: false,
  disabled: false,
};

const Component = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      value,
      onChange,
      className,
      helperText = "",
      color = "secondary",
      error = false,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const componentProps = {
      ...defaultProps,
      ...props,
    };

    return (
      <Inner className={className} fullWidth={fullWidth} color={color}>
        <SelectField
          {...componentProps}
          ref={ref}
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

export const Select = memo(Component);
