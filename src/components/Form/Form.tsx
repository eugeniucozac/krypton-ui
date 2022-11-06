import { memo } from "react";
import { FormProps } from "./types";
import { Wrapper } from "./Form.styles";

const Form = memo(({ children, ...props }: FormProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
});

export default Form;
