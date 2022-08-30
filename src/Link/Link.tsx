import { memo } from "react";
import { LinkProps } from "./types";
import { Wrapper } from "./Link.styles";

const Link = memo(
  (
    {
      children,
      className,
      href,
      color = "primary",
      size = "md",
      underline = "onHover",
    }: LinkProps,
    props
  ) => {
    return (
      <Wrapper
        {...props}
        className={className}
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
