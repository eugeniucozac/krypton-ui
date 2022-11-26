import { ComponentProps } from "react";
import { Color, Size } from "../../types";

type CalendarType = {
  children?: React.ReactNode;
  className?: string;
  color?: Color;
  size?: Size;
  disabled?: boolean;
};

type RowType = {
  day: number;
  value: any;
  currentMonth?: boolean;
};

type InputBaseType = {
  fullWidth: boolean;
  endIcon: React.ReactNode;
};

type InputBaseStyleType = {
  color?: Color;
  readOnly?: boolean;
};

type CalendarWrapperStyleType = {
  hideInput: boolean;
};

export type InnerStyledProps = InputBaseType;

export type CalendarWrapperStyleProps = CalendarWrapperStyleType;

export type InputFieldStyledProps = InputBaseType & InputBaseStyleType;

export type RowProps = RowType;

export type CalendarProps = ComponentProps<"div"> & CalendarType;
