import { memo } from "react";
import { InputProps } from "./types";
import { Inner, Input } from "./Input.styles";

const Switch = memo(
  (
    {
      value,
      onChange,
      name,
      className,
      beginIcon,
      endIcon,
      helperText,
      type = "text",
      placeholder = "text",
      color = "success",
      disabled = false,
      error = false,
      fullWidth = false,
      required = false,
      readOnly = false,
    }: InputProps,
    props
  ) => {
    return (
      <Inner className={className} color={color} fullWidth={fullWidth}>
        {beginIcon}
        <Input
          {...props}
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          beginIcon={beginIcon}
          endIcon={endIcon}
        />
        {endIcon}
      </Inner>
    );
  }
);

export default Switch;
