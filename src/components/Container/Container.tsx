import { memo } from "react";
import { ContainerProps } from "./types";
import { Wrapper } from "./Container.styles";

const defaultProps: Partial<ContainerProps> = {
  size: "md",
  fluid: false,
};

const Container = memo(({ children, ...props }: ContainerProps) => {
  const componentProps = {
    ...defaultProps,
    ...props,
  };
  return <Wrapper {...componentProps}>{children}</Wrapper>;
});

export default Container;
