import { memo } from "react";
import { CarouselItemProps } from "./types";
import { Item } from "./Carousel.styles";

export const CarouselItem = memo(
  ({ children, active }: CarouselItemProps, props) => {
    return (
      <Item {...props} active={active}>
        {children}
      </Item>
    );
  }
);
