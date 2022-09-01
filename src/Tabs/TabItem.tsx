import { memo } from "react";
import { TabItemProps, TabsAlign, Variant } from "./types";
import { Color } from "../types";
import { Item, Link } from "./Tabs.styles";

export const TabItem = memo(
  (
    {
      label,
      disabled = false,
      className,
      onChange,
      active,
      color,
      value,
      variant,
      tabsAlign,
    }: TabItemProps,
    props
  ) => {
    return (
      <Item {...props} className={className}>
        <Link
          color={color as Color}
          disabled={disabled}
          tabsAlign={tabsAlign as TabsAlign}
          variant={variant as Variant}
          active={active as boolean}
          onClick={() => !disabled && onChange(value as number)}
        >
          {label}
        </Link>
      </Item>
    );
  }
);
