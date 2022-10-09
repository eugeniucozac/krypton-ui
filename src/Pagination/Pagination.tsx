import { memo } from "react";
import { PaginationProps } from "./types";
import { Wrapper, Item } from "./Pagination.styles";
import Icon from "../Icon";

export const Pagination = memo(
  ({
    total,
    current,
    color = "primary",
    onChange,
    disabled = false,
    size = "md",
    showPrevious = true,
    showNext = true,
    previousIcon = "navigateBefore",
    nextIcon = "navigateNext",
    ...props
  }: PaginationProps) => {
    let pageNew = current - 2 > 0 ? current - 2 : 1;
    let pages = [] as any;

    for (let i = 0; i < 3 && pageNew < total; i++) {
      pages = [...pages, pageNew];
      pageNew++;
    }

    if (current > 3) {
      if (current > 4) pages = ["...", ...pages];
      pages = [1, ...pages];
    }

    if (total > 1) {
      if (total - 1 > current) pages = [...pages, "..."];
      pages = [...pages, total];
    }

    const lastPage = pages[pages.length - 1];

    return (
      <Wrapper {...props}>
        <ul>
          {showPrevious && (
            <Item
              color={color}
              disabled={disabled || current === 1}
              size={size}
              onClick={() =>
                !disabled && current !== 1 && onChange(current - 1)
              }
            >
              <Icon name={previousIcon} />
            </Item>
          )}
          {pages.map((number: any, iter: number) => {
            const active = current === number;
            return (
              <Item
                key={iter}
                color={color}
                active={active}
                disabled={disabled}
                size={size}
                onClick={() => !disabled && onChange(Number(number))}
              >
                <a>{number}</a>
              </Item>
            );
          })}
          {showNext && (
            <Item
              color={color}
              disabled={disabled || current === lastPage}
              size={size}
              onClick={() =>
                !disabled && current !== lastPage && onChange(current + 1)
              }
            >
              <Icon name={nextIcon} />
            </Item>
          )}
        </ul>
      </Wrapper>
    );
  }
);
