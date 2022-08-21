import { ComponentProps } from "react";

type ButtonGroupType = {
  children?: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type ButtonGroupProps = ComponentProps<"div"> & ButtonGroupType;
