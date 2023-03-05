import { ComponentPropsWithoutRef } from "react";
type ChildrenType = {
    children: React.ReactNode;
};
type ActiveType = {
    active?: boolean;
};
type CarouselType = {
    children: React.ReactNode[];
    controls?: boolean;
    indicators?: boolean;
    activeIndex?: number;
    interval?: number;
    autoPlay?: boolean;
    onSelect?: (value: number) => void;
};
type CarouselItemType = ChildrenType & ActiveType;
type CarouselCaptionType = ChildrenType;
export type IndicatorStyledProps = ActiveType;
export type CarouselProps = ComponentPropsWithoutRef<"div"> & CarouselType;
export type CarouselItemProps = ComponentPropsWithoutRef<"div"> & CarouselItemType;
export type CarouselCaptionProps = ComponentPropsWithoutRef<"div"> & CarouselCaptionType;
export {};
