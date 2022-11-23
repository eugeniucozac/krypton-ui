import { memo } from "react";
import { FormLabelProps } from "./types";
import { Wrapper } from "./FormControl.styles";

const FormLabel = memo(({ children, ...props }: FormLabelProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
});

export default FormLabel;
