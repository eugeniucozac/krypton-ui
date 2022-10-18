import { ComponentPropsWithRef } from "react";
import { Color } from "../types";

type RangeType = {
  onChange: any;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  initial: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  max: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  details?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  value?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default default
   */
};

export type ColorStyledProps = {
  color?: Color;
};

export type RangeProps = ComponentPropsWithRef<"div"> & RangeType;
