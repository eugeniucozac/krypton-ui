import { memo } from "react";
import { ListProps } from "./types";
import { Wrapper } from "./List.styles";

export const List = memo(({ children, className }: ListProps, props) => {
  return (
    <Wrapper {...props} className={className}>
      {children}
    </Wrapper>
  );
});
