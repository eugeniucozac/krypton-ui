import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type AdvancedAlertType = {
  children?: React.ReactNode;
  color?: Color;
  onClose?: () => void;
};

export type ColorStyledProps = {
  color: Color;
};

export type AdvancedAlertStyledProps = ColorStyledProps & {
  onClose?: () => void;
};

export type AdvancedAlertProps = ComponentPropsWithRef<"div"> &
  AdvancedAlertType;
