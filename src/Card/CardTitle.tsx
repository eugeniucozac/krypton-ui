import { memo } from "react";
import { CardBaseProps } from "./types";
import { Title } from "./Card.styles";

export const CardTitle = memo(({ children, ...props }: CardBaseProps) => {
  return <Title {...props}>{children}</Title>;
});
