import { memo } from "react";
import { CardBaseProps } from "./types";
import { Title } from "./Card.styles";

export const CardTitle = memo(
  ({ children, className }: CardBaseProps, props) => {
    return (
      <Title {...props} className={className}>
        {children}
      </Title>
    );
  }
);
