import { memo } from "react";
import Icon from "../Icon";
import { ModalHeaderProps } from "./types";
import { Header, Button } from "./Modal.styles";

export const ModalHeader = memo(
  ({ children, closeButton, onClose }: ModalHeaderProps) => {
    return (
      <Header>
        {children}
        {closeButton && (
          <Button onClick={onClose}>
            <Icon name="close" color="rgb(0, 0, 0)" />
          </Button>
        )}
      </Header>
    );
  }
);
