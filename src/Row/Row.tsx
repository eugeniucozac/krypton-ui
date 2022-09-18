import { memo } from "react";
import { RowProps } from "./types";
import { Wrapper } from "./Row.styles";

const Row = memo(({ children, className }: RowProps, props) => {
  return (
    <Wrapper {...props} className={className}>
      {children}
    </Wrapper>
  );
});

export default Row;
