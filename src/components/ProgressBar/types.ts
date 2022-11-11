import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type ProgressBarType = {
  value: number;
  color?: Color;
  showValue?: boolean;
};

export type ColorStyledProps = {
  color: Color;
};

export type ProgressStyleProps = ColorStyledProps & { value: number };

export type ValueStyleProps = ColorStyledProps & { withValue: boolean };

export type ProgressBarProps = ComponentPropsWithRef<"div"> & ProgressBarType;
