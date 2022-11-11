import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type RadioType = {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value?: string;
  color?: Color;
  disabled?: boolean;
};

export type RadioStyledProps = {
  color: Color;
  checked: boolean;
  disabled: boolean;
};

export type RadioProps = ComponentPropsWithRef<"input"> & RadioType;
