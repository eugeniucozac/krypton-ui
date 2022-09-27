import React, { memo } from "react";
import { TableBodyProps } from "./types";
import { Body } from "./Table.styles";

export const TableBody = memo(({ children, size }: TableBodyProps, props) => {
  return (
    <Body {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { size });
        }
      })}
    </Body>
  );
});
