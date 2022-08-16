import { ComponentProps } from "react";
import { Color } from "../types";

type ProgressBarType = {
  value: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default success
   */
  showValue?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default false
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type ColorStyledProps = {
  color: Color;
};

export type ProgressStyleProps = ColorStyledProps & { value: number };

export type ValueStyleProps = ColorStyledProps & { withValue: boolean };

export type ProgressBarProps = ComponentProps<"div"> & ProgressBarType;
