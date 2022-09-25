import React, { memo, ReactNode } from "react";
import { TableProps } from "./types";
import { Wrapper } from "./Table.styles";

export const Table = memo(
  ({ children, className, width, size, stripped }: TableProps, props) => {
    return (
      <Wrapper
        {...props}
        className={className}
        width={width}
        stripped={stripped}
      >
        {React.Children.map<ReactNode, ReactNode>(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { size });
          }
        })}
      </Wrapper>
    );
  }
);
