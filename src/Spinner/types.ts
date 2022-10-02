import { ComponentPropsWithRef } from "react";
import { Color, Size } from "../types";

type SpinnerType = {
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default success
   */
  size?: Size;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default md
   */
};

export type ColorStyledProps = {
  color?: Color;
};

export type SizeStyledProps = {
  size?: Size;
};

export type SpinnerProps = ComponentPropsWithRef<"svg"> & SpinnerType;
