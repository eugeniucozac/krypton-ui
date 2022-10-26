import { ComponentProps, ComponentPropsWithRef } from "react";
import { Size, ColorCodes } from "../../types";

export type IconName =
  | "file"
  | "upload"
  | "heart"
  | "home"
  | "minus"
  | "plus"
  | "mail"
  | "basket"
  | "starFill"
  | "info"
  | "ok"
  | "warning"
  | "cross"
  | "close"
  | "arrowDown"
  | "tick"
  | "user"
  | "message"
  | "clear"
  | "send"
  | "formatAlignCenter"
  | "formatAlignJustify"
  | "formatAlignLeft"
  | "formatAlignRight"
  | "navigateBefore"
  | "navigateNext"
  | "check"
  | "expandLess"
  | "expandMore"
  | "keyboardControl"
  | "firstPage"
  | "lastPage"
  | "person"
  | "star"
  | "bookmarkOutline"
  | "favorite"
  | "https"
  | "search"
  | "viewList"
  | "viewModule"
  | "viewQuilt"
  | "calendarToday"
  | "locationPin";

type NameType = {
  name: IconName;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type IconType = NameType & {
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: ColorCodes;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  size?: Size;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default md
   */
};

export type IconStyledProps = NameType & {
  size: Size;
};

export type IconProps = ComponentPropsWithRef<"span"> & IconType;
