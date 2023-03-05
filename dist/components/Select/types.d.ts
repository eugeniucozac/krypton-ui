import React, { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";
import { Color } from "../../types";
type ColorType = {
    color?: Color;
};
type ChildrenType = {
    children: React.ReactNode;
};
type FormSelectType = ChildrenType & ColorType & {
    value: string | number;
    onChange: (value: string) => void;
    helperText?: string;
    error?: boolean;
    fullWidth?: boolean;
};
export type SelectStyledProps = ColorType & {
    fullWidth: boolean;
    readOnly?: boolean;
};
export type SelectProps = ComponentPropsWithRef<"select"> & FormSelectType;
export type OptionProps = ComponentPropsWithoutRef<"option"> & ChildrenType;
export {};
