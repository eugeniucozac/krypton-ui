import React, { memo } from "react";
import { TableProps, SizeAlignStyledProps } from "./types";
import { Wrapper } from "./Table.styles";

export const Table = memo(({ children, size, ...props }: TableProps) => {
  return (
    <Wrapper {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { size } as SizeAlignStyledProps);
        }
      })}
    </Wrapper>
  );
});
