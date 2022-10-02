import { memo } from "react";
import { TableColProps } from "./types";
import { Coltd, Colth } from "./Table.styles";

const defaultProps: Partial<TableColProps> = {
  size: "medium",
  align: "left",
};

export const TableCol = memo(
  ({ children, tag = "td", ...props }: TableColProps) => {
    const componentProps: TableColProps = {
      ...defaultProps,
      ...props,
    };
    if (tag === "td") {
      return <Coltd {...componentProps}>{children}</Coltd>;
    } else {
      return <Colth {...componentProps}>{children}</Colth>;
    }
  }
);
