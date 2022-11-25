import { ComponentPropsWithoutRef } from "react";

type ButtonGroupType = {
  children?: React.ReactNode;
};

export type ButtonGroupProps = ComponentPropsWithoutRef<"div"> &
  ButtonGroupType;
