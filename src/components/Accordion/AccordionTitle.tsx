import { memo } from "react";
import Icon from "../Icon";
import { AccordionTitleProps } from "./types";
import { Header, Title } from "./Accordion.styles";

export const AccordionTitle = memo(
  ({ children, handleChange, icon, color, ...props }: AccordionTitleProps) => {
    return (
      <Title {...props} type="button" onClick={handleChange}>
        <Header>{children}</Header>
        <Icon name={icon} color={color} />
      </Title>
    );
  }
);
