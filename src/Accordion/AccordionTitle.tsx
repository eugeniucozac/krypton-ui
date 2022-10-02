import { memo } from "react";
import Icon from "../Icon";
import { AccordionTitleProps } from "./types";
import { Header, Title } from "./Accordion.styles";

export const AccordionTitle = memo(
  ({
    children,
    closeIcon = "plus",
    openIcon = "minus",
    color = "rgb(0, 0, 0)",
    onChange,
    value,
    targetId,
    ...props
  }: AccordionTitleProps) => {
    const toggleIcon = value === targetId ? openIcon : closeIcon;
    return (
      <Title {...props} type="button" onClick={() => onChange(targetId)}>
        <Header>{children}</Header>
        <Icon name={toggleIcon} color={color} />
      </Title>
    );
  }
);
