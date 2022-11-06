import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type InputType =
  | "email"
  | "number"
  | "password"
  | "tel"
  | "text"
  | "url"
  | "color";

type FormInputType = {
  value: string | number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onChange: (value: any) => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  name?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  type?: InputType;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  helperText?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  placeholder?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  beginIcon?: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  endIcon?: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: any;
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
  readOnly?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default false
   */
};

export type InnerStyledProps = {
  fullWidth: boolean;
  type: InputType;
  beginIcon: React.ReactNode;
  endIcon: React.ReactNode;
};

export type InputFieldStyledProps = {
  fullWidth: boolean;
  type: InputType;
  beginIcon: React.ReactNode;
  endIcon: React.ReactNode;
  color?: Color;
  readOnly?: boolean;
};

export type InputProps = ComponentPropsWithRef<"input"> & FormInputType;
