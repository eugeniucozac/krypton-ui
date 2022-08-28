import { memo } from "react";
import Icon from "../Icon";
import { AlertProps } from "./types";
import { Name } from "../Icon/types";
import { Wrapper, Button, IconWrapper, Heading } from "./Alert.styles";

const iconType: any = {
  error: "ok",
  warning: "warning",
  success: "ok",
  info: "info",
};

const Alert = memo(
  (
    {
      children,
      className,
      heading,
      color = "info",
      closeIcon = "close",
      onClose,
    }: AlertProps,
    props
  ) => {
    return (
      <Wrapper
        {...props}
        color={color}
        heading={heading}
        onClose={onClose}
        className={className}
      >
        <IconWrapper>
          <Icon name={iconType[color]} size="md" />
        </IconWrapper>
        <div>
          {heading && <Heading>{heading}</Heading>}
          {children}
        </div>
        <Button onClick={onClose}>
          <Icon name={closeIcon as Name} color="rgb(193, 193, 193)" />
        </Button>
      </Wrapper>
    );
  }
);

export default Alert;
