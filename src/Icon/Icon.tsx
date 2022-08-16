import { memo } from "react";
import { IconProps } from "./types";
import { Wrapper } from "./Icon.styles";

const Icon = memo(({ className, color, name, size = "md" }: IconProps) => {
  return <Wrapper size={size} name={name} color={color} />;
});

export default Icon;
