import { memo } from "react";
import Icon from "../Icon";
import { AccordionTitleProps } from "./types";
import { Header, Title } from "./Accordion.styles";

export const AccordionTitle = memo(
  ({
    children,
    allowMultiple,
    onChange = () => {},
    value = [],
    closeIcon = "plus",
    openIcon = "minus",
    color = "rgb(0, 0, 0)",
    index = 0,
    ...props
  }: AccordionTitleProps) => {
    let toggleIcon = closeIcon;

    if (value === index || (allowMultiple && value?.includes(index))) {
      toggleIcon = openIcon;
    }

    const handleChange = () => {
      if (allowMultiple) {
        let updateValues = [...value, index];
        if (toggleIcon === openIcon) {
          updateValues = updateValues.filter((item) => item !== index);
        }
        onChange(updateValues);
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
