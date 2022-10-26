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
    index,
    allowMultiple,
    show,
    setShow,
    handleChange,
    ...props
  }: any) => {
    var toggleIcon = value === index ? openIcon : closeIcon;
    if (allowMultiple) {
      toggleIcon = show ? openIcon : closeIcon;
    }

    return (
      <Title {...props} type="button" onClick={handleChange}>
        <Header>{children}</Header>
        <Icon name={toggleIcon} color={color} />
      </Title>
    );
  }
);
