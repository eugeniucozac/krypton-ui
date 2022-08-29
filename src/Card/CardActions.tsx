import { memo } from "react";
import { CardBaseProps } from "./types";
import { Actions } from "./Card.styles";

export const CardActions = memo(
  ({ children, className }: CardBaseProps, props) => {
    return (
      <Actions {...props} className={className}>
        {children}
      </Actions>
    );
  }
);
