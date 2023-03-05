import { InputProps } from "./types";
import { Wrapper, InputField, HelperText, ErrorText } from "./Input.styles";
import { memo, forwardRef } from "react";

const defaultProps: Partial<InputProps> = {
  placeholder: "",
  disabled: false,
  required: false,
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
      error,
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

    console.log("props ", props);

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
          error={error}
          onChange={onChange}
          type={type}
          fullWidth={fullWidth}
          beginIcon={beginIcon}
          endIcon={endIcon}
        />
        {endIcon}
        {helperText && <HelperText>{helperText}</HelperText>}
        {error && <ErrorText error={error}>{error}</ErrorText>}
      </Wrapper>
    );
  }
);

const Input = memo(Component);

export default Input;
