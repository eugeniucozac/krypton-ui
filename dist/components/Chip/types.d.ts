import { ComponentPropsWithoutRef } from "react";
import { Color, Size } from "../../types";
export type Variant = "square" | "rounded";
type ChipBaseType = {
    disabled?: boolean;
    size?: Size;
    variant?: Variant;
};
type ChipType = ChipBaseType & {
    children?: React.ReactNode;
    color?: Color;
};
export type ColorStyledProps = {
    color: Color;
};
export type WrapperStyledProps = ColorStyledProps & ChipBaseType;
export type ChipProps = ComponentPropsWithoutRef<"div"> & ChipType;
export {};
