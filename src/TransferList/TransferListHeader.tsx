import { memo, useState, useEffect } from "react";
import Icon from "../Icon";
import { TransferListHeaderProps, ItemProps } from "./types";
import { Item, Label, Checkbox, Header } from "./TransferList.styles";

export const TransferListHeader = memo(
  ({
    children,
    label,
    items,
    checkedItemsLength,
    onChange,
    ...props
  }: TransferListHeaderProps) => {
    const [checked, setChecked] = useState("empty");

    useEffect(() => {
      if (items.length === checkedItemsLength) {
        setChecked("checkedAll");
      } else {
        if (checkedItemsLength) {
          setChecked("checkedSome");
        } else {
          setChecked("empty");
        }
      }
    }, [items.length, checkedItemsLength]);

    const handleChange = () => {
      const selectAllItems = items.map((item: ItemProps) =>
        !item.value ? { ...item, value: true } : item
      );
      const unselectAllItems = items.map((item: ItemProps) =>
        item.value ? { ...item, value: false } : item
      );
      if (checked === "empty" || checked === "checkedSome") {
        onChange(selectAllItems);
      }
      if (checked === "checkedAll") {
        onChange(unselectAllItems);
      }
    };

    return (
      <Header {...props}>
        <Item htmlFor={label}>
          <input
            type="checkbox"
            name="checkbox"
            id={label}
            value={checked}
            onChange={handleChange}
            disabled={!items.length}
          />
          <Checkbox checked={children.length && checked !== "empty"}>
            <Icon
              name={checked === "checkedAll" ? "tick" : "minus"}
              size="sm"
            />
          </Checkbox>
          <Label>
            {label}&nbsp;
            <span>
              {checkedItemsLength}/{items.length}
            </span>
          </Label>
        </Item>
      </Header>
    );
  }
);
