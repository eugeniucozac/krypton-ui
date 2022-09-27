import { memo } from "react";
import { CardProps } from "./types";
import { Wrapper } from "./Card.styles";

export const Card = memo(({ children }: CardProps, props) => {
  return <Wrapper {...props}>{children}</Wrapper>;
});
