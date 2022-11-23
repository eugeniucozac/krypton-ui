import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type AutocompleteType = {
  value: string;
  onChange: (value: string) => void;
  suggestions: string[];
  name?: string;
  helperText?: string;
  placeholder?: string;
  className?: string;
  color?: any;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  readOnly?: boolean;
};

export type InnerStyledProps = {
  fullWidth: boolean;
};

export type InputFieldStyledProps = {
  fullWidth: boolean;
  color?: Color;
  readOnly?: boolean;
};

export type AutocompleteProps = Omit<
  ComponentPropsWithRef<"input">,
  "onChange"
> &
  AutocompleteType;
