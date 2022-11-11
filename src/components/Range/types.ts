import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type RangeType = {
  onChange: (value: number) => void;
  initial: number;
  max: number;
  className?: string;
  details?: boolean;
  value?: number;
  color?: Color;
};

export type ColorStyledProps = {
  color?: Color;
};

export type RangeProps = ComponentPropsWithRef<"div"> & RangeType;
