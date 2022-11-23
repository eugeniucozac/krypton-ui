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

export type ColorStyledProps = {};

export type WrapperStyledProps = ColorStyledProps & {};

export type RowProps = RowType;

export type CalendarProps = ComponentProps<"div"> & CalendarType;
