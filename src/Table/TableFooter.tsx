import { memo } from "react";
import { TableFooterProps } from "./types";
import { Footer } from "./Table.styles";

export const TableFooter = memo(({ children }: TableFooterProps, props) => {
  return <Footer {...props}>{children}</Footer>;
});
