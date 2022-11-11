import { ComponentPropsWithRef } from "react";

type ListType = {
  children: React.ReactNode;
};

export type ListProps = ComponentPropsWithRef<"ul"> & ListType;

export type ListItemProps = ComponentPropsWithRef<"li"> & ListType;
