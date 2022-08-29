import { memo } from "react";
import { CardHeaderProps } from "./types";
import { Header } from "./Card.styles";

export const CardHeader = memo(
  ({ className, title, subtitle, avatar, action }: CardHeaderProps, props) => {
    return (
      <Header {...props} className={className}>
        {avatar}
        <div>
          <h3>{title}</h3>
          <h6>{subtitle}</h6>
        </div>
        {action}
      </Header>
    );
  }
);
