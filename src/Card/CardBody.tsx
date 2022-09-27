import { memo } from "react";
import { CardBaseProps } from "./types";
import { Body } from "./Card.styles";

export const CardBody = memo(({ children }: CardBaseProps, props) => {
  return <Body {...props}>{children}</Body>;
});
