import React, { memo, ReactNode } from "react";
import { TableRowProps } from "./types";
import { Row } from "./Table.styles";

export const TableRow = memo(
  ({ children, className, hover, size, stripped }: TableRowProps, props) => {
    return (
      <Row className={className} {...props} hover={hover} stripped={stripped}>
        {React.Children.map<ReactNode, ReactNode>(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { size });
          }
        })}
      </Row>
    );
  }
);
