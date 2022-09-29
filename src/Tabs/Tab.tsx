import { memo } from "react";
import { TabProps } from "./types";
import { Color } from "../types";
import { Link } from "./Tabs.styles";

export const Tab = memo(
  (
    {
      label,
      disabled = false,
      onChange,
      active,
      color,
      value,
      orientation,
      alignment,
    }: TabProps,
    props
  ) => {
    return (
      <li {...props}>
        <Link
          color={color as Color}
          disabled={disabled}
          alignment={alignment}
          orientation={orientation}
          active={active}
          onClick={!disabled ? () => onChange(value) : undefined}
        >
          {label}
        </Link>
      </li>
    );
  }
);
