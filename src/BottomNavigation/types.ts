import { ComponentProps } from "react";
import { Color } from "../types";

type BottomNavigationBaseType = {
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  value?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onChange?: any;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type BottomNavigationType = BottomNavigationBaseType & {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type BottomNavigationItemType = BottomNavigationBaseType & {
  label?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  icon?: any;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  active?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  iter?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type ItemStyledProps = {
  active: boolean;
  color: Color;
};

export type BottomNavigationProps = ComponentProps<"nav"> &
  BottomNavigationType;

export type BottomNavigationItemProps = ComponentProps<"a"> &
  BottomNavigationItemType;
