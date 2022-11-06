import { memo } from "react";
import { NavItemProps } from "./types";
import { Item } from "./Navbar.styles";

export const NavItem = memo(
  ({
    children,
    className,
    to,
    active,
    disabled,
    color,
    ...props
  }: NavItemProps) => {
    return (
      <Item
        {...props}
        color={color}
        className={className}
        active={active}
        disabled={disabled}
      >
        <a href={to}>{children}</a>
      </Item>
    );
  }
);
