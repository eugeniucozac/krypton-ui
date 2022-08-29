import { memo } from "react";
import { CardBaseProps } from "./types";
import { Content } from "./Card.styles";

export const CardContent = memo(
  ({ children, className }: CardBaseProps, props) => {
    return (
      <Content {...props} className={className}>
        {children}
      </Content>
    );
  }
);
