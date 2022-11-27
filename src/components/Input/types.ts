import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type ErrorType = {
  error?: string;
};

type InputBaseType = {
  fullWidth: boolean;
  beginIcon: React.ReactNode;
  endIcon: React.ReactNode;
};

type InputBaseStyleType = ErrorType & {
  color?: Color;
  readOnly?: boolean;
};

type InputErrorStyleType = ErrorType;

type FormInputType = InputBaseStyleType & {
  value: string | number;
  onChange: (value?: string) => void;
  helperText?: string;
  beginIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
};

export type InnerStyledProps = InputBaseType & { type: string };

export type InputFieldStyledProps = InputBaseType & InputBaseStyleType;

export type InputErrorStyledProps = InputErrorStyleType;

export type InputProps = ComponentPropsWithRef<"input"> & FormInputType;
