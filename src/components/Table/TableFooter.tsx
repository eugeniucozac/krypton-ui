import { memo } from "react";
import { TableFooterProps } from "./types";
import { Footer } from "./Table.styles";

export const TableFooter = memo(({ children, ...props }: TableFooterProps) => {
  return <Footer {...props}>{children}</Footer>;
});
