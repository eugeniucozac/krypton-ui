import { memo } from "react";
import { ListProps } from "./types";
import { Wrapper } from "./List.styles";

export const List = memo(({ children, ...props }: ListProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
});
