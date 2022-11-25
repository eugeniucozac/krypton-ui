import React, { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type ChildrenType = {
  children: React.ReactNode;
};

type FormSelectType = ChildrenType & {
  value: string | number;
  onChange: (value: string) => void;
  helperText?: string;
  className?: string;
  color?: Color;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  required?: boolean;
};

export type SelectStyledProps = {
  fullWidth: boolean;
  readOnly?: boolean;
  color?: Color;
};

export type SelectProps = ComponentPropsWithRef<"select"> & FormSelectType;

export type OptionProps = ComponentPropsWithoutRef<"option"> & ChildrenType;
