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
    ...props
  }: any) => {
    /// AccordionTitleProps
    const toggleIcon = value === index ? openIcon : closeIcon;

    const handleChange = () => {
      if (allowMultiple) {
        setShow(!show);
      } else {
        onChange(index);
      }
    };

    return (
      <Title {...props} type="button" onClick={handleChange}>
        <Header>{children}</Header>
        <Icon name={toggleIcon} color={color} />
      </Title>
    );
  }
);
