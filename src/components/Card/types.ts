import { ComponentPropsWithRef } from "react";

type CardBaseType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type CardImageType = {
  imgSrc: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */

  alt?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  height?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type CardHeaderType = {
  title: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  subtitle: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  avatar: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type WrapperStyledProps = {
  maxWidth?: string;
};

export type HeightStyledProps = {
  height?: string;
};

export type CardHeaderProps = ComponentPropsWithRef<"div"> & CardHeaderType;

export type CardProps = ComponentPropsWithRef<"div"> &
  CardBaseType & { maxWidth?: string };

export type CardImageProps = ComponentPropsWithRef<"img"> & CardImageType;

export type CardBaseProps = ComponentPropsWithRef<"div"> & CardBaseType;
