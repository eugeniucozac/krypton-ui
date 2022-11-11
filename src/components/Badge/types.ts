import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

export type Variant = "default" | "dot";

export type Alignment =
  | "top-right"
  | "bottom-right"
  | "top-left"
  | "bottom-left";

type BadgeType = {
  children: React.ReactNode;
  value: number;
  showZero?: boolean;
  alignment?: Alignment;
  maxValue?: number;
  color?: Color;
  variant?: Variant;
};

type BasicStyledProps = {
  color: Color;
  variant: Variant;
};

export type ValueStyledProps = BasicStyledProps & {
  alignX: string;
  alignY: string;
};

export type DotStyledProps = BasicStyledProps;

export type BadgeProps = ComponentPropsWithRef<"div"> & BadgeType;
