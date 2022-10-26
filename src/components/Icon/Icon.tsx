import { memo } from "react";
import { IconProps } from "./types";
import { Wrapper } from "./Icon.styles";

const Icon = memo(({ size = "md", ...props }: IconProps) => {
  return <Wrapper size={size} {...props} />;
});

export default Icon;
