import { ComponentProps } from "react";
import { Color, Size } from "../types";

type UnderlineType = "none" | "onHover" | "always";

type LinkType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  href: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  underline?: UnderlineType;
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
};

export type WrapperStyledProps = {
  color: Color;
  size: Size;
  underline: UnderlineType;
};

export type LinkProps = ComponentProps<"a"> & LinkType;
