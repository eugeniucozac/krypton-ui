import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type BreadcrumbsType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  separator?: string | React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default default
   */
};

export type SeparatorStyledProps = {
  color: Color;
};

export type ItemWrapperStyledProps = {
  disabled: boolean;
};

export type BreadcrumbsProps = ComponentPropsWithRef<"nav"> & BreadcrumbsType;
