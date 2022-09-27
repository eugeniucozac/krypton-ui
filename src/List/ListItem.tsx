import { memo } from "react";
import { ListProps } from "./types";
import { Item } from "./List.styles";

export const ListItem = memo(({ children }: ListProps, props) => {
  return <Item {...props}>{children}</Item>;
});
