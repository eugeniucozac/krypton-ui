import { memo } from "react";
import Icon from "../Icon";
import { BottomNavigationItemProps } from "./types";
import { Item } from "./BottomNavigation.styles";

export const BottomNavigationItem = memo(
  (
    {
      className,
      label,
      icon,
      active,
      onChange,
      iter,
      color,
    }: BottomNavigationItemProps,
    props
  ) => {
    return (
      <Item
        {...props}
        className={className}
        onClick={() => onChange(iter)}
        active={active}
        color={color}
      >
        <Icon name={icon} size="lg" />
        {label}
      </Item>
    );
  }
);
