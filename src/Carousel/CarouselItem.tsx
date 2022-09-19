import { memo } from "react";
import { CarouselItemProps } from "./types";
import { Item } from "./Carousel.styles";

export const CarouselItem = memo(
  ({ children, className, active }: CarouselItemProps, props) => {
    return (
      <Item {...props} active={active} className={className}>
        {children}
      </Item>
    );
  }
);
