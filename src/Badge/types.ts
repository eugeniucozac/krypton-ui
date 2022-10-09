import { ComponentPropsWithRef } from "react";
import { Color } from "../types";

export type Variant = "default" | "dot";

export type Alignment =
  | "top-right"
  | "bottom-right"
  | "top-left"
  | "bottom-left";

type BadgeType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  value: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  showZero?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  alignment?: Alignment;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  maxValue?: number;
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
  variant?: Variant;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default default
   */
};

type BasicStyledProps = {
  color: Color;
  variant: Variant;
};

export type ValueStyledProps = BasicStyledProps & {
  alignX: string;
  alignY: string;
};

export type DotStyledProps = BasicStyledProps;

export type BadgeProps = ComponentPropsWithRef<"div"> & BadgeType;
