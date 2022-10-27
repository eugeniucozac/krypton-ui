import { ComponentProps, ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type CheckBoxType = {
  checked: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onChange: () => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  value?: string;
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

export type CheckBoxStyledProps = {
  color: Color;
  checked: boolean;
  disabled: boolean;
};

export type CheckBoxProps = ComponentPropsWithRef<"input"> & CheckBoxType;
