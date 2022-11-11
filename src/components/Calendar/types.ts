import { ComponentProps } from "react";
import { Color, Size } from "../../types";

export type Variant = "square" | "rounded";

type BundleType = {
  children?: React.ReactNode;
  className?: string;
  color?: Color;
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
};

export type ColorStyledProps = {
  color: Color;
};

export type WrapperStyledProps = ColorStyledProps & {
  size: Size;
  variant: Variant;
  disabled: boolean;
};

export type BundleProps = ComponentProps<"div"> & BundleType;
