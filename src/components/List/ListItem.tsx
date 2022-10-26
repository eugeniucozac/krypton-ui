import { memo } from "react";
import { ListItemProps } from "./types";
import { Item } from "./List.styles";

export const ListItem = memo(({ children, ...props }: ListItemProps) => {
  return <Item {...props}>{children}</Item>;
});
