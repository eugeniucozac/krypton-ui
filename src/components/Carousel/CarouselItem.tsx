import { memo } from "react";
import { CarouselItemProps } from "./types";
import { Item } from "./Carousel.styles";

export const CarouselItem = memo(
  ({ children, ...props }: CarouselItemProps) => {
    return <Item {...props}>{children}</Item>;
  }
);
