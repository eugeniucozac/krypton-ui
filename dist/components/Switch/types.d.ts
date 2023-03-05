import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";
type SwitchType = {
    value: boolean;
    onChange: () => void;
    name?: string;
    color?: Color;
    disabled?: boolean;
};
export type DisabledStyledProps = {
    disabled: boolean;
};
export type SwitcherStyledProps = {
    value: boolean;
    color: Color;
};
export type SwitchProps = Omit<ComponentPropsWithRef<"input">, "value"> & SwitchType;
export {};
