import { ComponentPropsWithoutRef } from "react";
import { Color, Size } from "../../types";
type ColorBaseType = {
    color?: Color;
};
type SizeBaseType = {
    size?: Size;
};
type SpinnerType = ColorBaseType & SizeBaseType;
export type ColorStyledProps = ColorBaseType;
export type SizeStyledProps = SizeBaseType;
export type SpinnerProps = ComponentPropsWithoutRef<"svg"> & SpinnerType;
export {};
