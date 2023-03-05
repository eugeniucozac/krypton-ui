import React, { memo } from "react";
import { TableBodyProps, SizeAlignStyledProps } from "./types";
import { Body } from "./Table.styles";

export const TableBody = memo(
  ({ children, size, ...props }: TableBodyProps) => {
    return (
      <Body {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { size } as SizeAlignStyledProps);
          }
        })}
      </Body>
    );
  }
);
