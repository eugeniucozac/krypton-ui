import React, { memo } from "react";
import { TableProps } from "./types";
import { Wrapper } from "./Table.styles";

export const Table = memo(
  ({ children, width, size, stripped }: TableProps, props) => {
    return (
      <Wrapper {...props} width={width} stripped={stripped}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { size });
          }
        })}
      </Wrapper>
    );
  }
);
