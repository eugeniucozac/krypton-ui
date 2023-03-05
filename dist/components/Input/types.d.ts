import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";
type ErrorType = {
    error?: string;
};
type InputBaseType = {
    fullWidth: boolean;
    beginIcon: React.ReactNode;
    endIcon: React.ReactNode;
};
type InputBaseStyleType = ErrorType & {
    color?: Color;
    readOnly?: boolean;
};
type InputErrorStyleType = ErrorType;
type InputOptionalType = InputBaseStyleType & {
    helperText?: string;
    beginIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    fullWidth?: boolean;
};
type InputDefaultType = InputOptionalType & {
    name: string;
};
type InputFormType = InputOptionalType & {
    value: string | number;
    onChange: (value?: string) => void;
};
type FormInputType = InputDefaultType | InputFormType;
export type InnerStyledProps = InputBaseType & {
    type: string;
};
export type InputFieldStyledProps = InputBaseType & InputBaseStyleType;
export type InputErrorStyledProps = InputErrorStyleType;
export type InputProps = ComponentPropsWithRef<"input"> & FormInputType;
export {};
