import { memo } from "react";
import { TabProps } from "./types";
import { Link } from "./Tabs.styles";

export const Tab = memo(
  ({
    label,
    disabled = false,
    onChange,
    active,
    color,
    value,
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
          onClick={!disabled ? () => onChange(value) : undefined}
        >
          {label}
        </Link>
      </li>
    );
  }
);
