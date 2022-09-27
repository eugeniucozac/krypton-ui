import { memo } from "react";
import { ListProps } from "./types";
import { Wrapper } from "./List.styles";

export const List = memo(({ children }: ListProps, props) => {
  return <Wrapper {...props}>{children}</Wrapper>;
});
