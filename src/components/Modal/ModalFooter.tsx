import { memo } from "react";
import { ModalBodyProps } from "./types";
import { Footer } from "./Modal.styles";

export const ModalFooter = memo(({ children }: ModalBodyProps) => {
  return <Footer>{children}</Footer>;
});
