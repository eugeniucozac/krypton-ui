import { ComponentPropsWithoutRef } from "react";
import { Color } from "../../types";
type ValueType = {
    value: number;
};
type ProgressBarType = ValueType & {
    color?: Color;
    showValue?: boolean;
};
export type ColorStyledProps = {
    color: Color;
};
export type ProgressStyleProps = ColorStyledProps & ValueType;
export type ValueStyleProps = ColorStyledProps & {
    withValue: boolean;
};
export type ProgressBarProps = ComponentPropsWithoutRef<"div"> & ProgressBarType;
export {};
