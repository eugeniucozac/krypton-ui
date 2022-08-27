import { memo } from "react";
import { ListProps } from "./types";
import { Item } from "./List.styles";

export const ListItem = memo(({ children, className }: ListProps, props) => {
  return (
    <Item className={className} {...props}>
      {children}
    </Item>
  );
});
