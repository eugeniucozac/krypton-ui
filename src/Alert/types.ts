import { ComponentProps } from "react";
import { Color } from "../types";

type AlertType = {
  children?: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onClose: () => void;
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
  heading?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  closeIcon?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type IconType = "error" | "warning" | "success" | "info";

export type WrapperStyledProps = Pick<AlertType, "heading" | "onClose"> & {
  color: Color;
};

export type IconProps = Record<IconType, string>;

export type AlertProps = ComponentProps<"div"> & AlertType;
