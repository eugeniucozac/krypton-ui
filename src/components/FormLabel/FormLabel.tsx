import { memo } from "react";
import { FormLabelProps } from "./types";
import { Wrapper, Label } from "./FormLabel.styles";

const FormLabel = memo(({ children, text, ...props }: FormLabelProps) => {
  return (
    <Wrapper {...props}>
      <Label>{text}</Label>
      {children}
    </Wrapper>
  );
});

export default FormLabel;
