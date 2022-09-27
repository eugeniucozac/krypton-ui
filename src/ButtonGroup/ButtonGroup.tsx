import { memo } from "react";
import { ButtonGroupProps } from "./types";
import { Wrapper } from "./ButtonGroup.styles";

const ButtonGroup = memo(({ children }: ButtonGroupProps, props) => {
  return <Wrapper {...props}>{children}</Wrapper>;
});

export default ButtonGroup;
