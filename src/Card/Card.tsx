import { memo } from "react";
import { CardProps } from "./types";
import { Wrapper } from "./Card.styles";

export const Card = memo(
  ({ children, className, maxWidth = "100%" }: CardProps, props) => {
    return (
      <Wrapper {...props} maxWidth={maxWidth} className={className}>
        {children}
      </Wrapper>
    );
  }
);
