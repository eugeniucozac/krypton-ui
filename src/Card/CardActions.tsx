import { memo } from "react";
import { CardBaseProps } from "./types";
import { Actions } from "./Card.styles";

export const CardActions = memo(({ children }: CardBaseProps, props) => {
  return <Actions {...props}>{children}</Actions>;
});
