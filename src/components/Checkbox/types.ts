import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type CheckBoxType = {
  checked: boolean;
  onChange: () => void;
  value?: string;
  name?: string;
  color?: Color;
  disabled?: boolean;
};

export type CheckBoxStyledProps = {
  color: Color;
  checked: boolean;
  disabled: boolean;
};

export type CheckBoxProps = ComponentPropsWithRef<"input"> & CheckBoxType;
