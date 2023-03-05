import { ComponentPropsWithoutRef } from "react";
type FormLabelType = {
    children: React.ReactNode;
};
export type FormLabelProps = ComponentPropsWithoutRef<"div"> & FormLabelType;
export {};
