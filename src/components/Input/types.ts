import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type InputType =
  | "email"
  | "number"
  | "password"
  | "tel"
  | "text"
  | "url"
  | "color";

type FormInputType = {
  value: string | number;
  onChange: (value: any) => void;
  name?: string;
  type?: InputType;
  helperText?: string;
  placeholder?: string;
  className?: string;
  beginIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: any;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  readOnly?: boolean;
};

export type InnerStyledProps = {
  fullWidth: boolean;
  type: InputType;
  beginIcon: React.ReactNode;
  endIcon: React.ReactNode;
};

export type InputFieldStyledProps = {
  fullWidth: boolean;
  type: InputType;
  beginIcon: React.ReactNode;
  endIcon: React.ReactNode;
  color?: Color;
  readOnly?: boolean;
};

export type InputProps = ComponentPropsWithRef<"input"> & FormInputType;
