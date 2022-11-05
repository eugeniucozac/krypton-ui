import React, { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type ChildrenType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type FormSelectType = ChildrenType & {
  value: string | number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onChange: (value: string) => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  helperText?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
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
  error?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default false
   */
  required?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default false
   */
};

export type SelectStyledProps = {
  fullWidth: boolean;
  readOnly?: boolean;
  color?: Color;
};

export type SelectProps = ComponentPropsWithRef<"select"> & FormSelectType;

export type OptionProps = ComponentPropsWithRef<"option"> & ChildrenType;
