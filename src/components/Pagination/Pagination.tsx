import { memo, useEffect } from "react";
import { PaginationProps, PageProps } from "./types";
import { Wrapper, Item } from "./Pagination.styles";
import Icon from "../Icon";

const LEFT_DOTS = "LEFT_DOTS";
const RIGHT_DOTS = "RIGHT_DOTS";

export const Pagination = memo(
  ({
    total,
    current,
    onChange,
    color = "primary",
    closestPages = 1,
    disabled = false,
    size = "md",
    showPrevious = true,
    showNext = true,
    previousIcon = "navigateBefore",
    nextIcon = "navigateNext",
    ...props
  }: PaginationProps) => {
    const range = (from: PageProps, to: PageProps, step = 1) => {
      let i = from;
      const range = [];

      while (i <= to) {
        range.push(i);
        i = Number(i) + step;
      }

      return range;
    };

    const closestPage = Math.max(0, Math.min(closestPages, 2));

    const gotoPage = (page: PageProps) => {
      const current = Math.max(0, Math.min(Number(page), total));
      onChange(current);
    };

    const handleClick = (page: PageProps) => {
      gotoPage(page);
    };

    const handleLeftDots = () => {
      gotoPage(current - closestPage * 2 - 1);
    };

    const handleRightDots = () => {
      gotoPage(current + closestPage * 2 + 1);
    };

    const handleLeft = () => {
      gotoPage(current - 1);
    };

    const handleRight = () => {
      gotoPage(current + 1);
    };

    useEffect(() => {
      gotoPage(1);
    }, []);

    const pageNumbers = () => {
      const totalNumbers = closestPage * 2 + 3;
      const totalPages = totalNumbers + 2;

      if (total > totalPages) {
        const startPage = Math.max(2, current - closestPage);
        const endPage = Math.min(total - 1, current + closestPage);

        let pages = range(startPage, endPage);
        const hasLeftSpill = startPage > 2;
        const hasRightSpill = total - endPage > 1;
        const spillOffset = totalNumbers - (pages.length + 1);

        switch (true) {
          case hasLeftSpill && !hasRightSpill: {
            const extraPages = range(startPage - spillOffset, startPage - 1);
            pages = [LEFT_DOTS, ...extraPages, ...pages];
            break;
          }

          case !hasLeftSpill && hasRightSpill: {
            const extraPages = range(endPage + 1, endPage + spillOffset);
            pages = [...pages, ...extraPages, RIGHT_DOTS];
            break;
          }

          case hasLeftSpill && hasRightSpill:
          default: {
            pages = [LEFT_DOTS, ...pages, RIGHT_DOTS];
            break;
          }
        }

        return [1, ...pages, total];
      }

      return range(1, total);
    };

    const pages = pageNumbers();
    const lastPage = pages[pages.length - 1];

    return (
      <Wrapper {...props}>
        <ul>
          {showPrevious && (
            <Item
              color={color}
              disabled={disabled || current === 1}
              size={size}
              onClick={() => !disabled && current !== 1 && handleLeft()}
            >
              <Icon name={previousIcon} />
            </Item>
          )}
          {pages.map((page: PageProps) => {
            const active = current === page;
            if (page === LEFT_DOTS)
              return (
                <Item
                  key={page}
                  color={color}
                  size={size}
                  disabled={false}
                  onClick={handleLeftDots}
                >
                  <div>...</div>
                </Item>
              );
            if (page === RIGHT_DOTS)
              return (
                <Item
                  key={page}
                  color={color}
                  size={size}
                  disabled={false}
                  onClick={handleRightDots}
                >
                  <div>...</div>
                </Item>
              );
            return (
              <Item
                key={page}
                color={color}
                active={active}
                disabled={disabled}
                size={size}
                onClick={() => handleClick(page)}
              >
                <div>{page}</div>
              </Item>
            );
          })}
          {showNext && (
            <Item
              color={color}
              disabled={disabled || current === lastPage}
              size={size}
              onClick={() => !disabled && current !== lastPage && handleRight()}
            >
              <Icon name={nextIcon} />
            </Item>
          )}
        </ul>
      </Wrapper>
    );
  }
);
