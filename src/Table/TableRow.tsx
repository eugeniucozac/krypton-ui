import React, { memo } from "react";
import { TableRowProps } from "./types";
import { Row } from "./Table.styles";

export const TableRow = memo(({ children, size, ...props }: TableRowProps) => {
  return (
    <Row {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { size });
        }
      })}
    </Row>
  );
});
