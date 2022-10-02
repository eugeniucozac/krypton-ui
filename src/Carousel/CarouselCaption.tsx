import { memo } from "react";
import { CarouselCaptionProps } from "./types";
import { Caption } from "./Carousel.styles";

export const CarouselCaption = memo(
  ({ children, ...props }: CarouselCaptionProps) => {
    return <Caption {...props}>{children}</Caption>;
  }
);
