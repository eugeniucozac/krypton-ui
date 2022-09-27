import { memo } from "react";
import { CardBaseProps } from "./types";
import { Content } from "./Card.styles";

export const CardContent = memo(({ children }: CardBaseProps, props) => {
  return <Content {...props}>{children}</Content>;
});
