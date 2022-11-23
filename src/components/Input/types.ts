import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type InputType =
  | "email"
  | "number"
  | "password"
  | "tel"
  | "text"
  | "url"
  | "color"
  | "date";

type InputBaseType = {
  fullWidth: boolean;
  type: InputType;
  beginIcon: React.ReactNode;
  endIcon: React.ReactNode | boolean;
};

type InputBaseStyleType = {
  color?: Color;
  readOnly?: boolean;
};

type FormInputType = InputBaseStyleType & {
  value: string | number;
  onChange: (value?: string) => void;
  name?: string;
  type?: InputType;
  helperText?: string;
  placeholder?: string;
  className?: string;
  beginIcon?: React.ReactNode;
  endIcon?: React.ReactNode | boolean;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  required?: boolean;
};

export type InnerStyledProps = InputBaseType;

export type InputFieldStyledProps = InputBaseType & InputBaseStyleType;

export type InputProps = ComponentPropsWithRef<"input"> & FormInputType;
