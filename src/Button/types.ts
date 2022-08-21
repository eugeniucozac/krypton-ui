import { ComponentProps } from "react";
import { Color, Size } from "../types";

export type Model = "default" | "outline" | "text";

export type Variant = "square" | "rounded";

export type Width = "default" | "full";

type ButtonType = {
  children?: React.ReactNode;
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
   */
  model?: Model;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default default
   */
  width?: Width;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  size?: Size;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default md
   */
  disabled?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  beginIcon?: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  endIcon?: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onClick?: () => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type WrapperStyledProps = {
  color: Color;
  size: Size;
  model: Model;
  variant: Variant;
  width: Width;
  disabled: boolean;
  beginIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export type ButtonProps = ComponentProps<"div"> & ButtonType;
