import { ComponentProps } from "react";
import { Color, Size } from "../../types";

export type Variant = "square" | "rounded";

type BundleType = {
  children?: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default default
   */
  size?: Size;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default md
   */
  variant?: Variant;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default primary
   */
  disabled?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default false
   */
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
