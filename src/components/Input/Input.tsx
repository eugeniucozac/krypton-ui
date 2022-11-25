import { InputProps } from "./types";
import { Wrapper, InputField, HelperText } from "./Input.styles";
import { memo, forwardRef } from "react";

const defaultProps: Partial<InputProps> = {
  placeholder: "",
  disabled: false,
  required: false,
  error: false,
  readOnly: false,
  color: "secondary",
};

const Component = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onChange,
      className,
      beginIcon,
      endIcon,
      helperText,
      type = "text",
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
          ref={ref}
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

const Input = memo(Component);

export default Input;
