import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type SwitchType = {
  value: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onChange: () => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  name?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default default
   */
  disabled?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default false
   */
};

export type DisabledStyledProps = {
  disabled: boolean;
};

export type SwitcherStyledProps = {
  value: boolean;
  color: Color;
};

export type SwitchProps = Omit<ComponentPropsWithRef<"input">, "value"> &
  SwitchType;
