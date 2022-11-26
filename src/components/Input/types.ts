import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type InputBaseType = {
  fullWidth: boolean;
  beginIcon: React.ReactNode;
  endIcon: React.ReactNode;
};

type InputBaseStyleType = {
  color?: Color;
  readOnly?: boolean;
  error?: string;
};

type InputErrorStyleType = {
  error?: string;
};

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
