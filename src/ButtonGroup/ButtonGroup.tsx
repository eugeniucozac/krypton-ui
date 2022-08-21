import { memo } from "react";
import { ButtonGroupProps } from "./types";
import { Wrapper } from "./ButtonGroup.styles";

const ButtonGroup = memo(({ children, className }: ButtonGroupProps) => {
  return <Wrapper className={className}>{children}</Wrapper>;
});

export default ButtonGroup;
