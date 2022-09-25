import React, { memo, ReactNode } from "react";
import { TableBodyProps } from "./types";
import { Body } from "./Table.styles";

export const TableBody = memo(
  ({ children, className, size }: TableBodyProps, props) => {
    return (
      <Body className={className} {...props}>
        {React.Children.map<ReactNode, ReactNode>(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { size });
          }
        })}
      </Body>
    );
  }
);
