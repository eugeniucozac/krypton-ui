import { memo } from "react";
import { FormLabelProps } from "./types";
import { Wrapper, Label } from "./FormLabel.styles";

const FormLabel = memo(({ children, ...props }: FormLabelProps) => {
  return (
    <Wrapper {...props}>
      <Label>{children}</Label>
    </Wrapper>
  );
});

export default FormLabel;
