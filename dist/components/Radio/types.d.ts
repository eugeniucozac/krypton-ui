import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";
type CheckedType = {
    checked: boolean;
};
type RadioType = CheckedType & {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    color?: Color;
};
export type RadioStyledProps = CheckedType & {
    color: Color;
    disabled: boolean;
};
export type RadioProps = ComponentPropsWithRef<"input"> & RadioType;
export {};
