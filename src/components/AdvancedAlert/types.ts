import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type AdvancedAlertType = {
  children?: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default secondary
   */
  onClose?: () => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type ColorStyledProps = {
  color: Color;
};

export type AdvancedAlertStyledProps = ColorStyledProps & {
  onClose?: () => void;
};

export type AdvancedAlertProps = ComponentPropsWithRef<"div"> &
  AdvancedAlertType;
