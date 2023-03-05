import { ComponentPropsWithoutRef } from "react";
import { Color, Size } from "../../types";
type AvatarBaseType = {
    color?: Color;
    size?: Size;
};
type AvatarType = AvatarBaseType & {
    name: string;
    imgSrc?: string;
};
export type AvatarStyledProps = AvatarBaseType;
export type AvatarProps = ComponentPropsWithoutRef<"div"> & AvatarType;
export {};
