import { ComponentPropsWithRef } from "react";
import { Color, Size } from "../../types";

type AvatarType = {
  name: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default primary
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  imgSrc?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  size?: Size;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default md
   */
};

export type AvatarStyledProps = {
  color?: Color;
  size?: Size;
};

export type AvatarProps = ComponentPropsWithRef<"div"> & AvatarType;
