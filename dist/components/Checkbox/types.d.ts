import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";
type CheckedType = {
    checked: boolean;
};
type CheckBoxType = CheckedType & {
    onChange: () => void;
    value?: string;
    color?: Color;
};
export type CheckBoxStyledProps = CheckedType & {
    color: Color;
    disabled: boolean;
};
export type CheckBoxProps = ComponentPropsWithRef<"input"> & CheckBoxType;
export {};
