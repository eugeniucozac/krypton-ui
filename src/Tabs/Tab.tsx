import { memo } from "react";
import { TabProps } from "./types";
import { Link } from "./Tabs.styles";

export const Tab = memo(
  ({
    value = 1,
    disabled = false,
    onChange = () => {},
    label,
    active,
    color,
    orientation,
    alignment,

    ...props
  }: TabProps) => {
    return (
      <li {...props}>
        <Link
          color={color}
          disabled={disabled}
          alignment={alignment}
          orientation={orientation}
          active={active}
          onClick={() => !disabled && onChange(value)}
        >
          {label}
        </Link>
      </li>
    );
  }
);
