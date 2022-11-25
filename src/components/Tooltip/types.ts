import { ComponentPropsWithoutRef } from "react";

export type Placement = "top" | "bottom" | "right" | "left";

type TooltipType = {
  children: React.ReactNode;
  title: string;
  arrow?: boolean;
  placement?: Placement;
};

export type PlacementStyledProps = {
  placement?: Placement;
};

export type TooltipProps = ComponentPropsWithoutRef<"div"> & TooltipType;
