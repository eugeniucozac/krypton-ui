import { memo } from "react";
import { PaginationProps } from "./types";
import { Wrapper, Item } from "./Pagination.styles";
import Icon from "../Icon";

export const Pagination = memo(
  ({
    count,
    currentPage,
    color = "primary",
    onChange,
    disabled = false,
    size = "md",
    showPreviousIcon = true,
    showNextIcon = true,
    previousIcon = "navigateBefore",
    nextIcon = "navigateNext",
    ...props
  }: PaginationProps) => {
    let pageNew = currentPage - 2 > 0 ? currentPage - 2 : 1;
    let pages = [] as any;

    for (let i = 0; i < 3 && pageNew < count; i++) {
      pages = [...pages, pageNew];
      pageNew++;
    }

    if (currentPage > 3) {
      if (currentPage > 4) pages = ["...", ...pages];
      pages = [1, ...pages];
    }

    if (count > 1) {
      if (count - 1 > currentPage) pages = [...pages, "..."];
      pages = [...pages, count];
    }

    const lastPage = pages[pages.length - 1];

    return (
      <Wrapper {...props}>
        <ul>
          {showPreviousIcon && (
            <Item
              color={color}
              disabled={disabled || currentPage === 1}
              size={size}
              onClick={() =>
                !disabled && currentPage !== 1 && onChange(currentPage - 1)
              }
            >
              <Icon name={previousIcon} />
            </Item>
          )}
          {pages.map((number: any, iter: number) => {
            const active = currentPage === number;
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
          {showNextIcon && (
            <Item
              color={color}
              disabled={disabled || currentPage === lastPage}
              size={size}
              onClick={() =>
                !disabled &&
                currentPage !== lastPage &&
                onChange(currentPage + 1)
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
