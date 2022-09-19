import { memo } from "react";
import { CarouselCaptionProps } from "./types";
import { Caption } from "./Carousel.styles";

export const CarouselCaption = memo(
  ({ children, className }: CarouselCaptionProps, props) => {
    return (
      <Caption {...props} className={className}>
        {children}
      </Caption>
    );
  }
);
