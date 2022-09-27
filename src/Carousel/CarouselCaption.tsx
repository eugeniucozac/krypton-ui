import { memo } from "react";
import { CarouselCaptionProps } from "./types";
import { Caption } from "./Carousel.styles";

export const CarouselCaption = memo(
  ({ children }: CarouselCaptionProps, props) => {
    return <Caption {...props}>{children}</Caption>;
  }
);
