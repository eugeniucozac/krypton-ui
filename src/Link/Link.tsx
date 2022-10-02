import { memo } from "react";
import { LinkProps } from "./types";
import { Wrapper } from "./Link.styles";

const defaultProps: Partial<LinkProps> = {
  color: "primary",
  size: "md",
  underline: "hover",
};

const Link = memo(({ children, ...props }: LinkProps) => {
  const componentProps: LinkProps = {
    ...defaultProps,
    ...props,
  };
  return <Wrapper {...componentProps}>{children}</Wrapper>;
});

export default Link;
