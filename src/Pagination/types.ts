import { ComponentPropsWithRef } from "react";
import { Color, Size } from "../types";
import { IconName } from "../Icon/types";

type PageDotsType = "LEFT_DOTS" | "RIGHT_DOTS";

type PaginationType = {
  total: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  current: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onChange: (value: number) => void;
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
   */
  pagesLimit?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  closestPages?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  disabled?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  size?: Size;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  showPrevious?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  showNext?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  previousIcon?: IconName;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  nextIcon?: IconName;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  pagesToShow?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type PageProps = number | PageDotsType;

export type ItemStyledProps = {
  active?: boolean;
  color: Color;
  disabled: boolean;
  size: Size;
};

export type PaginationProps = ComponentPropsWithRef<"div"> & PaginationType;
