import React, { memo, ReactNode } from "react";
import { TableHeadProps } from "./types";
import { Head } from "./Table.styles";

export const TableHead = memo(
  ({ children, className, size, stripped }: TableHeadProps, props) => {
    return (
      <Head className={className} {...props}>
        {React.Children.map<ReactNode, ReactNode>(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { size, stripped });
          }
        })}
      </Head>
    );
  }
);
