import { memo } from "react";
import { CardHeaderProps } from "./types";
import { Header } from "./Card.styles";

export const CardHeader = memo(
  ({ title, subtitle, avatar, ...props }: CardHeaderProps) => {
    return (
      <Header {...props}>
        {avatar}
        <div>
          <h3>{title}</h3>
          <h6>{subtitle}</h6>
        </div>
      </Header>
    );
  }
);
