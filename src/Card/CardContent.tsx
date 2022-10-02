import { memo } from "react";
import { CardBaseProps } from "./types";
import { Content } from "./Card.styles";

export const CardContent = memo(({ children, ...props }: CardBaseProps) => {
  return <Content {...props}>{children}</Content>;
});
