import { ComponentPropsWithoutRef } from "react";
export type Placement = "top" | "bottom" | "right" | "left";
type PlacementType = {
    placement?: Placement;
};
type TooltipType = PlacementType & {
    children: React.ReactNode;
    title: string;
    arrow?: boolean;
};
export type PlacementStyledProps = PlacementType;
export type TooltipProps = ComponentPropsWithoutRef<"div"> & TooltipType;
export {};
