import { memo } from "react";
import { ContainerProps } from "./types";
import { Wrapper } from "./Container.styles";

const Container = memo(
  ({ children, size = "md", fluid = false }: ContainerProps, props) => {
    const defaultProps = {
      ...props,
      size: "md",
      color: "success",
    };

    return (
      <Wrapper {...props} size={size} fluid={fluid}>
        {children}
      </Wrapper>
    );
  }
);

export default Container;
