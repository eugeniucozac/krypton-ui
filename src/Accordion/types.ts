import React, { ComponentProps } from "react";
import { Name } from "../Icon/types";
import { ColorCodes } from "../types";

export type Variant = "toggle" | "stayOpen";

type ContentType = {
  children?: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  expandedPanel?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type AccordionType = {
  onChange: (value: number) => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  variant?: Variant;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default default
   */
};

type AccordionTitleType = ContentType & {
  targetId: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onChange?: any;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  closeIcon?: Name;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  openIcon?: Name;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: ColorCodes;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type MaxHeightStyledProps = {
  maxHeight: number;
};

export type AccordionProps = ComponentProps<"div"> &
  ContentType &
  AccordionType;

export type AccordionPanelProps = ComponentProps<"div"> &
  ContentType & { panelId?: number };

export type AccordionTitleProps = ComponentProps<"div"> & AccordionTitleType;
