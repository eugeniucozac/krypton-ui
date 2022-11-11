import { ComponentPropsWithRef } from "react";

type ButtonGroupType = {
  children?: React.ReactNode;
};

export type ButtonGroupProps = ComponentPropsWithRef<"div"> & ButtonGroupType;
