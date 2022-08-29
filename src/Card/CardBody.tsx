import { memo } from "react";
import { CardBaseProps } from "./types";
import { Body } from "./Card.styles";

export const CardBody = memo(
  ({ children, className }: CardBaseProps, props) => {
    return (
      <Body {...props} className={className}>
        {children}
      </Body>
    );
  }
);
