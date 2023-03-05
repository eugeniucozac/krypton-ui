import React, { memo } from "react";
import { BreadcrumbsProps } from "./types";
import { Wrapper, Separator, ItemWrapper } from "./Breadcrumbs.styles";

const Breadcrumbs = memo(
  ({
    children,
    separator = "-",
    color = "dark",
    ...props
  }: BreadcrumbsProps) => {
    const count = React.Children.count(children);
    return (
      <Wrapper {...props}>
        <ol>
          {React.Children.map(children, (child, iter) => {
            if (React.isValidElement(child)) {
              const nonLastItem = count !== iter + 1;
              return (
                <>
                  <ItemWrapper color={color} disabled={nonLastItem}>
                    {child}
                  </ItemWrapper>
                  {nonLastItem && (
                    <Separator color={color}>{separator}</Separator>
                  )}
                </>
              );
            }
          })}
        </ol>
      </Wrapper>
    );
  }
);

export default Breadcrumbs;
