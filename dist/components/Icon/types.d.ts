import { ComponentPropsWithRef } from "react";
import { Size, ColorCodes } from "../../types";
export type IconName = "file" | "upload" | "heart" | "home" | "minus" | "plus" | "mail" | "basket" | "starFill" | "info" | "ok" | "warning" | "cross" | "close" | "arrowDown" | "tick" | "user" | "message" | "clear" | "send" | "formatAlignCenter" | "formatAlignJustify" | "formatAlignLeft" | "formatAlignRight" | "navigateBefore" | "navigateNext" | "check" | "expandLess" | "expandMore" | "keyboardControl" | "firstPage" | "lastPage" | "person" | "star" | "bookmarkOutline" | "favorite" | "https" | "search" | "viewList" | "viewModule" | "viewQuilt" | "calendarToday" | "locationPin";
type NameType = {
    name: IconName;
};
type IconType = NameType & {
    color?: ColorCodes;
    size?: Size;
};
export type IconStyledProps = NameType & {
    size: Size;
};
export type IconProps = ComponentPropsWithRef<"span"> & IconType;
export {};
