import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type OnCloseType = {
  onClose?: () => void;
};

type AdvancedAlertType = OnCloseType & {
  children?: React.ReactNode;
  color?: Color;
};

export type ColorStyledProps = {
  color: Color;
};

export type AdvancedAlertStyledProps = ColorStyledProps & OnCloseType;

export type AdvancedAlertProps = ComponentPropsWithRef<"div"> &
  AdvancedAlertType;
