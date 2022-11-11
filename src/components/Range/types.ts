import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type RangeBaseType = {
  color?: Color;
};

type RangeType = RangeBaseType & {
  onChange: (value: number) => void;
  initial: number;
  max: number;
  className?: string;
  details?: boolean;
  value?: number;
};

export type ColorStyledProps = RangeBaseType;

export type RangeProps = ComponentPropsWithRef<"div"> & RangeType;
