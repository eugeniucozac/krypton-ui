import { ComponentProps } from "react";
import { Color, Size } from "../types";
import { Name } from "../Icon/types";

type PaginationType = {
  count: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  currentPage: number;
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
  disabled?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  size?: Size;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  showPreviousIcon?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  showNextIcon?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  previousIcon?: Name;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  nextIcon?: Name;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  pagesToShow?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type WrapperStyledProps = {};

export type ItemStyledProps = {
  active?: boolean;
  color: Color;
  disabled: boolean;
  size: Size;
};

export type PaginationProps = ComponentProps<"div"> & PaginationType;
