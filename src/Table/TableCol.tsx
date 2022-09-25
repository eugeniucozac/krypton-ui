import { memo } from "react";
import { TableColProps } from "./types";
import { Coltd, Colth } from "./Table.styles";

export const TableCol = memo(
  (
    {
      children,
      className,
      padding,
      size = "medium",
      align = "left",
      tag = "td",
    }: TableColProps,
    props
  ) => {
    if (tag === "td") {
      return (
        <Coltd
          className={className}
          {...props}
          align={align}
          padding={padding}
          size={size}
        >
          {children}
        </Coltd>
      );
    } else {
      return (
        <Colth
          className={className}
          {...props}
          align={align}
          padding={padding}
          size={size}
        >
          {children}
        </Colth>
      );
    }
  }
);
