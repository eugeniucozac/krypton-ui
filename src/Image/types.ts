import { ComponentProps } from "react";

type ImageType = {
  imgSrc: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  fluid?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  rounded?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type WrapperStyledProps = {
  rounded: boolean;
  fluid: boolean;
};

export type ImageProps = ComponentProps<"img"> & ImageType;
