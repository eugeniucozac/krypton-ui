import React, { memo } from "react";
import { TableRowProps } from "./types";
import { Row } from "./Table.styles";

export const TableRow = memo(
  ({ children, hover, size, stripped }: TableRowProps, props) => {
    return (
      <Row {...props} hover={hover} stripped={stripped}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { size });
          }
        })}
      </Row>
    );
  }
);
