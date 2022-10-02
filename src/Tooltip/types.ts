import { ComponentPropsWithRef } from "react";

export type Placement = "top" | "bottom" | "right" | "left";

type TooltipType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  title: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  arrow?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  placement?: Placement;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type PlacementStyledProps = {
  placement?: Placement;
};

export type TooltipProps = ComponentPropsWithRef<"div"> & TooltipType;
