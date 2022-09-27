import { memo } from "react";
import { TableColProps } from "./types";
import { Coltd, Colth } from "./Table.styles";

export const TableCol = memo(
  (
    {
      children,
      padding,
      size = "medium",
      align = "left",
      tag = "td",
    }: TableColProps,
    props
  ) => {
    if (tag === "td") {
      return (
        <Coltd {...props} align={align} padding={padding} size={size}>
          {children}
        </Coltd>
      );
    } else {
      return (
        <Colth {...props} align={align} padding={padding} size={size}>
          {children}
        </Colth>
      );
    }
  }
);
