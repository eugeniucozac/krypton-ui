import { memo } from "react";
import Icon from "../Icon";
import { AlertProps } from "./types";
import { Wrapper, Button, IconWrapper, Heading } from "./Alert.styles";

const iconType: any = {
  error: "ok",
  warning: "warning",
  success: "ok",
  info: "info",
};

const Alert = memo(
  ({
    children,
    heading,
    color = "info",
    closeIcon = "close",
    onClose,
    ...props
  }: AlertProps) => {
    return (
      <Wrapper {...props}>
        <IconWrapper>
          <Icon name={iconType[color]} size="md" />
        </IconWrapper>
        <div>
          {heading && <Heading>{heading}</Heading>}
          {children}
        </div>
        <Button onClick={onClose}>
          <Icon name={closeIcon} color="rgb(193, 193, 193)" />
        </Button>
      </Wrapper>
    );
  }
);

export default Alert;
