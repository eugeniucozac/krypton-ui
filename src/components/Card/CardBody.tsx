import { memo } from "react";
import { CardBaseProps } from "./types";
import { Body } from "./Card.styles";

export const CardBody = memo(({ children, ...props }: CardBaseProps) => {
  return <Body {...props}>{children}</Body>;
});
