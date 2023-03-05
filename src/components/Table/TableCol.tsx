import { memo } from "react";
import { TableColProps } from "./types";
import { Col } from "./Table.styles";

const defaultProps: Partial<TableColProps> = {
  size: "medium",
  align: "left",
};

export const TableCol = memo(({ children, ...props }: TableColProps) => {
  const componentProps = {
    ...defaultProps,
    ...props,
  };

  return <Col {...componentProps}>{children}</Col>;
});
