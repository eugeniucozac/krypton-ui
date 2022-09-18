import { ComponentProps } from "react";

type Size = "fluid" | "sm" | "md" | "lg";

type ContainerType = {
  children?: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  size?: Size;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default fluid
   */
};

export type WrapperStyledProps = {
  size: Size;
};

export type SizeMetricProps = Record<Size, string>;

export type ContainerProps = ComponentProps<"div"> & ContainerType;
