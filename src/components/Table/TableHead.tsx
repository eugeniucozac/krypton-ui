import React, { memo } from "react";
import { TableHeadProps } from "./types";
import { Head } from "./Table.styles";

export const TableHead = memo(
  ({ children, size, stripped, ...props }: TableHeadProps) => {
    return (
      <Head {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              size,
              stripped,
            } as TableHeadProps);
          }
        })}
      </Head>
    );
  }
);
