import { memo } from "react";
import { OptionProps } from "./types";

export const Option = memo(({ children }: OptionProps) => {
  return <option>{children}</option>;
});
