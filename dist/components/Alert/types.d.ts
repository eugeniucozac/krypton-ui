import { ComponentPropsWithoutRef } from "react";
import { IconName } from "../Icon/types";
import { Color } from "../../types";
type AlertBaseType = {
    color?: Color;
    heading?: string;
};
type AlertType = AlertBaseType & {
    children?: React.ReactNode;
    closeIcon?: IconName;
    onClose?: () => void;
};
export type WrapperStyledProps = AlertBaseType;
export type AlertProps = ComponentPropsWithoutRef<"div"> & AlertType;
export {};
