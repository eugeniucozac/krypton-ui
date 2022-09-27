import { memo } from "react";
import { LinkProps } from "./types";
import { Wrapper } from "./Link.styles";

const Link = memo(
  (
    {
      children,

      href,
      color = "primary",
      size = "md",
      underline = "hover",
    }: LinkProps,
    props
  ) => {
    return (
      <Wrapper
        {...props}
        size={size}
        color={color}
        underline={underline}
        href={href}
      >
        {children}
      </Wrapper>
    );
  }
);

export default Link;
