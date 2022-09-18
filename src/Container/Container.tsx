import { memo } from "react";
import { ContainerProps } from "./types";
import { Wrapper } from "./Container.styles";

const Container = memo(
  ({ children, className, size = "md" }: ContainerProps, props) => {
    return (
      <Wrapper {...props} className={className} size={size}>
        {children}
      </Wrapper>
    );
  }
);

export default Container;
