import { ComponentPropsWithRef } from "react";
import { Color, Size } from "../../types";

export type Variant = "default" | "outline" | "text" | "icon";

export type Shape = "square" | "rounded";

type ButtonType = {
  children?: React.ReactNode;
  shape?: Shape;
  variant?: Variant;
  color?: Color;
  fullWidth?: boolean;
  size?: Size;
  disabled?: boolean;
  beginIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
};

export type WrapperStyledProps = {
  color?: Color;
  size?: Size;
  variant?: Variant;
  shape?: Shape;
  fullWidth?: boolean;
  disabled?: boolean;
  beginIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export type ButtonProps = ComponentPropsWithRef<"button"> & ButtonType;
