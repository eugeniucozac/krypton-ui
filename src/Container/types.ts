import { ComponentProps } from "react";

type Size = "sm" | "md" | "lg";

type ContainerType = {
  children?: React.ReactNode;
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
  size?: Size;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default md
   */
};

export type WrapperStyledProps = {
  size: Size;
  fluid: boolean;
};

export type BreakpointProps = Record<Size, string>;

export type ContainerProps = ComponentProps<"div"> & ContainerType;
