import { memo } from "react";
import { ModalBodyProps } from "./types";
import { Body } from "./Modal.styles";

export const ModalBody = memo(({ children }: ModalBodyProps) => {
  return <Body>{children}</Body>;
});
