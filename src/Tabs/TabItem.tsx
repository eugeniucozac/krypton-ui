import { memo } from "react";
import { TabItemProps, TabsAlign, Variant } from "./types";
import { Color } from "../types";
import { Item, Link } from "./Tabs.styles";

export const TabItem = memo(
  (
    {
      label,
      disabled = false,

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
      <Item {...props}>
        <Link
          color={color as Color}
          disabled={disabled}
          tabsAlign={tabsAlign}
          variant={variant as Variant}
          active={active as boolean}
          onClick={!disabled ? () => onChange(value) : undefined}
        >
          {label}
        </Link>
      </Item>
    );
  }
);
