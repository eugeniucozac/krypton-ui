import { memo } from "react";
import { ButtonGroupProps } from "./types";
import { Wrapper } from "./ButtonGroup.styles";

const ButtonGroup = memo(({ children, ...props }: ButtonGroupProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
});

export default ButtonGroup;
