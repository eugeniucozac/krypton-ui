import { ComponentPropsWithoutRef } from "react";
import { Size, Color } from "../../types";

export type Variant = "controlled" | "readOnly" | "disabled";

type RatingType = {
  value: number;
  variant?: Variant;
  size?: Size;
  color?: Color;
  onChange: (value: string) => void;
};

export type VariantStyledProps = {
  variant: Variant;
};

export type WrapperStyledProps = VariantStyledProps & {
  color: Color;
};

export type RatingProps = ComponentPropsWithoutRef<"div"> & RatingType;
