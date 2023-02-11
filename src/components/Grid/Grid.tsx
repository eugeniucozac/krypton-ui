import { memo } from "react";
import { GridProps } from "./types";
import { Wrapper } from "./Grid.styles";

const Grid = memo(
  ({ children, className, container, spacing }: GridProps, props) => {
    return (
      <Wrapper
        {...props}
        className={className}
        spacing={spacing}
        container={container}
      >
        {children}
      </Wrapper>
    );
  }
);

export default Grid;
