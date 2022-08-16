import { memo } from "react";
import Icon from "../Icon";
import { AlertProps } from "./types";
import { Wrapper, Button, IconWrapper, Heading } from "./Alert.styles";
import { Name } from "../Icon/types";

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
        <Button>
          <Icon name={closeIcon as Name} color="rgb(193, 193, 193)" />
        </Button>
      </Wrapper>
    );
  }
);

export default Alert;
