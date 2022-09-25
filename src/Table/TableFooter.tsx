import { memo } from "react";
import { TableFooterProps } from "./types";
import { Footer } from "./Table.styles";

export const TableFooter = memo(
  ({ children, className }: TableFooterProps, props) => {
    return (
      <Footer className={className} {...props}>
        {children}
      </Footer>
    );
  }
);
