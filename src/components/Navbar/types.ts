import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type Align = "left" | "right" | "center";

type ChildrenType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type ActiveDisabledType = {
  active?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  disabled?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type NavbarType = ChildrenType & {
  align?: Align;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type NavSubItemType = ChildrenType & {
  title: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type NavItemType = ChildrenType &
  ActiveDisabledType & {
    to: string;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
    color?: Color;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
  };

export type NavStyledProps = {
  align: Align;
};

export type ItemStyledProps = ActiveDisabledType & {
  color?: Color;
};

export type AlignMetricProps = Record<Align, string>;

export type NavbarProps = ComponentPropsWithRef<"nav"> & NavbarType;

export type NavSubItemProps = ComponentPropsWithRef<"li"> & NavSubItemType;

export type NavItemProps = ComponentPropsWithRef<"li"> & NavItemType;
