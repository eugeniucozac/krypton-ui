import { ComponentPropsWithRef } from "react";
import { Color, Size } from "../../types";
import { IconName } from "../Icon/types";

type PaginationType = {
  total: number;
  current: number;
  onChange: (value: number) => void;
  color?: Color;
  closestPages?: number;
  disabled?: boolean;
  size?: Size;
  showPrevious?: boolean;
  showNext?: boolean;
  previousIcon?: IconName;
  nextIcon?: IconName;
  pagesToShow?: number;
};

export type PageProps = number | string;

export type ItemStyledProps = {
  active?: boolean;
  color: Color;
  disabled: boolean;
  size: Size;
};

export type PaginationProps = ComponentPropsWithRef<"div"> & PaginationType;
