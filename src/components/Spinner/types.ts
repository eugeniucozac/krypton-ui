import { ComponentPropsWithRef } from "react";
import { Color, Size } from "../../types";

type SpinnerType = {
  color?: Color;
  size?: Size;
};

export type ColorStyledProps = {
  color?: Color;
};

export type SizeStyledProps = {
  size?: Size;
};

export type SpinnerProps = ComponentPropsWithRef<"svg"> & SpinnerType;
