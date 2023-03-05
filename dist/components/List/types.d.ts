import { ComponentPropsWithoutRef } from "react";
type ListType = {
    children: React.ReactNode;
};
export type ListProps = ComponentPropsWithoutRef<"ul"> & ListType;
export type ListItemProps = ComponentPropsWithoutRef<"li"> & ListType;
export {};
