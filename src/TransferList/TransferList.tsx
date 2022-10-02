import React, { memo } from "react";
import { TransferListHeader } from "./TransferListHeader";
import Button from "../Button";
import Icon from "../Icon";
import { TransferListProps, ItemProps } from "./types";
import { Wrapper, Controls, ItemWrapper } from "./TransferList.styles";

export const TransferList = memo(
  ({
    children,
    leftItems,
    rightItems,
    setLeftItems,
    setRightItems,
    color = "secondary",
    leftChoicesLabel = "Choices",
    rightChoicesLabel = "Chosen",
    allChoices = false,
    ...props
  }: TransferListProps) => {
    const [left, right] = children;
    const leftCheckedItems = leftItems?.filter((item: ItemProps) => item.value);
    const rightCheckedItems = rightItems?.filter(
      (item: ItemProps) => item.value
    );

    const onMoveToRight = () => {
      const moveLeftItems = leftCheckedItems.map((item: ItemProps) =>
        item.value ? { ...item, value: false } : item
      );
      const updatedLeftItems = leftItems?.filter(
        (item: ItemProps) => !item.value
      );
      setRightItems([...rightItems, ...moveLeftItems]);
      setLeftItems(updatedLeftItems);
    };

    const onMoveToLeft = () => {
      const moveRightItems = rightCheckedItems.map((item: ItemProps) =>
        item.value ? { ...item, value: false } : item
      );
      const updatedRightItems = rightItems?.filter(
        (item: ItemProps) => !item.value
      );
      setLeftItems([...leftItems, ...moveRightItems]);
      setRightItems(updatedRightItems);
    };

    return (
      <Wrapper {...props} color={color}>
        <ItemWrapper>
          {allChoices && (
            <TransferListHeader
              children={left}
              label={leftChoicesLabel}
              items={leftItems}
              checkedItemsLength={leftCheckedItems.length}
              onChange={setLeftItems}
            />
          )}
          <ul>
            {React.Children.map(left, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, { items: leftItems });
              }
            })}
          </ul>
        </ItemWrapper>
        <Controls>
          <Button
            variant="icon"
            onClick={onMoveToRight}
            disabled={!leftCheckedItems.length}
          >
            <Icon name="navigateNext" />
          </Button>
          <Button
            variant="icon"
            onClick={onMoveToLeft}
            disabled={!rightCheckedItems.length}
          >
            <Icon name="navigateBefore" />
          </Button>
        </Controls>
        <ItemWrapper>
          {allChoices && (
            <TransferListHeader
              children={right}
              label={rightChoicesLabel}
              items={rightItems}
              checkedItemsLength={rightCheckedItems.length}
              onChange={setRightItems}
            />
          )}
          <ul>
            {React.Children.map(right, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, { items: rightItems });
              }
            })}
          </ul>
        </ItemWrapper>
      </Wrapper>
    );
  }
);
