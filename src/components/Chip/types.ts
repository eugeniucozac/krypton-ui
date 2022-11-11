import { ComponentPropsWithRef } from "react";
import { Color, Size } from "../../types";

export type Variant = "square" | "rounded";

type ChipType = {
  children?: React.ReactNode;
  color?: Color;
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
};

export type ColorStyledProps = {
  color: Color;
};

export type WrapperStyledProps = ColorStyledProps & {
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
};

export type ChipProps = ComponentPropsWithRef<"div"> & ChipType;
