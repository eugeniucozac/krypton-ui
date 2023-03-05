import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";
type FullWidthType = {
    fullWidth: boolean;
};
type ReadColorType = {
    color?: Color;
    readOnly?: boolean;
};
type AutocompleteType = ReadColorType & {
    value: string;
    onChange: (value: string) => void;
    suggestions: string[];
    name?: string;
    helperText?: string;
    placeholder?: string;
    className?: string;
    error?: boolean;
    fullWidth?: boolean;
};
export type InnerStyledProps = FullWidthType;
export type InputFieldStyledProps = FullWidthType & ReadColorType;
export type AutocompleteProps = Omit<ComponentPropsWithRef<"input">, "onChange"> & AutocompleteType;
export {};
