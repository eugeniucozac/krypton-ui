import { ComponentPropsWithoutRef } from "react";

type CarouselType = {
  children: React.ReactNode[];
  controls?: boolean;
  indicators?: boolean;
  activeIndex?: number;
  interval?: number;
  autoPlay?: boolean;
  onSelect?: (value: number) => void;
};

type CarouselItemType = {
  children: React.ReactNode;
  active?: boolean;
};

type CarouselCaptionType = {
  children: React.ReactNode;
};

export type IndicatorStyledProps = {
  active?: boolean;
};

export type CarouselProps = ComponentPropsWithoutRef<"div"> & CarouselType;

export type CarouselItemProps = ComponentPropsWithoutRef<"div"> &
  CarouselItemType;

export type CarouselCaptionProps = ComponentPropsWithoutRef<"div"> &
  CarouselCaptionType;
