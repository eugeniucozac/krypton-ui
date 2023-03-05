import { ComponentPropsWithRef } from "react";
import { Color, Size } from "../../types";
export type Variant = "default" | "outline" | "text" | "icon";
export type Shape = "square" | "rounded";
type BaseButtonType = {
    shape?: Shape;
    variant?: Variant;
    color?: Color;
    fullWidth?: boolean;
    size?: Size;
    beginIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
};
type ButtonType = BaseButtonType & {
    children?: React.ReactNode;
    onClick?: () => void;
};
export type WrapperStyledProps = BaseButtonType;
export type ButtonProps = ComponentPropsWithRef<"button"> & ButtonType;
export {};
