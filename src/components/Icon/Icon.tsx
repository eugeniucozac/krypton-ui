import { forwardRef, memo } from "react";
import { IconProps } from "./types";
import { Wrapper } from "./Icon.styles";

const Component = forwardRef<HTMLSpanElement, IconProps>(
  ({ size = "md", ...props }, ref) => {
    return <Wrapper ref={ref} size={size} {...props} />;
  }
);

const Icon = memo(Component);

export default Icon;
