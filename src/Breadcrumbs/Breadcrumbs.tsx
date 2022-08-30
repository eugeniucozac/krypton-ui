import React, { memo, ReactNode } from "react";
import { BreadcrumbsProps } from "./types";
import { Wrapper, Separator, Link } from "./Breadcrumbs.styles";

const Breadcrumbs = memo(
  (
    { children, className, separator = "-", color = "dark" }: BreadcrumbsProps,
    props
  ) => {
    const count = React.Children.count(children);
    return (
      <Wrapper {...props} className={className}>
        <ol>
          {React.Children.map<ReactNode, ReactNode>(children, (child, iter) => {
            if (React.isValidElement(child)) {
              const lastItem = count !== iter + 1;
              return (
                <>
                  <Link color={color} disabled={lastItem}>
                    {child}
                  </Link>
                  {lastItem && <Separator color={color}>{separator}</Separator>}
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
