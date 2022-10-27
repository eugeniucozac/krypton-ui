import { memo } from "react";
import Icon from "../Icon";
import { ModalHeaderProps } from "./types";
import { Header, CloseButton } from "./Modal.styles";

export const ModalHeader = memo(
  ({ children, closeButton, onClose }: ModalHeaderProps) => {
    return (
      <Header>
        {children}
        {closeButton && (
          <CloseButton onClick={onClose}>
            <Icon name="close" color="rgb(0, 0, 0)" />
          </CloseButton>
        )}
      </Header>
    );
  }
);
