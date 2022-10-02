import { memo } from "react";
import { CardBaseProps } from "./types";
import { Actions } from "./Card.styles";

export const CardActions = memo(({ children, ...props }: CardBaseProps) => {
  return <Actions {...props}>{children}</Actions>;
});
