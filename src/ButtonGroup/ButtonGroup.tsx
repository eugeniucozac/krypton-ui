import { memo } from "react";
import { ButtonGroupProps } from "./types";
import { Wrapper } from "./ButtonGroup.styles";

const ButtonGroup = memo(({ children, className }: ButtonGroupProps, props) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
});

export default ButtonGroup;
