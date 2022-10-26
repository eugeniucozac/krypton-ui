import { ComponentPropsWithRef } from "react";
import { Size, Color } from "../../types";

export type Variant = "controlled" | "readOnly" | "disabled";

type RatingType = {
  value: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  variant?: Variant;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default default
   */
  size?: Size;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default md
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default md
   */
  onChangeValue?: any; // (event: any) => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type VariantStyledProps = {
  variant: Variant;
};

export type WrapperStyledProps = VariantStyledProps & {
  color: Color;
};

export type RatingProps = ComponentPropsWithRef<"div"> & RatingType;
