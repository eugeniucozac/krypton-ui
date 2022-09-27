import { memo } from "react";
import { ContainerProps } from "./types";
import { Wrapper } from "./Container.styles";

const Container = memo(({ children, size = "md" }: ContainerProps, props) => {
  return (
    <Wrapper {...props} size={size}>
      {children}
    </Wrapper>
  );
});

export default Container;
