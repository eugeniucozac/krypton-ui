import { memo } from "react";
import Icon from "../Icon";
import { TransferListItemProps, ItemProps } from "./types";
import { Item, Label, Checkbox, List } from "./TransferList.styles";

export const TransferListItem = memo(
  ({ label, value, items, onChange, ...props }: TransferListItemProps) => {
    const handleChange = () => {
      const result =
        items?.map((item: ItemProps) =>
          item.label === label ? { ...item, value: !value } : item
        ) || [];
      onChange(result);
    };

    console.log(" value", value);

    return (
      <List {...props}>
        <Item htmlFor={label}>
          <input
            type="checkbox"
            name="checkbox"
            id={label}
            value={value}
            onChange={handleChange}
          />
          <Checkbox checked={value}>
            <Icon name="tick" size="sm" />
          </Checkbox>
          <Label>{label}</Label>
        </Item>
      </List>
    );
  }
);
