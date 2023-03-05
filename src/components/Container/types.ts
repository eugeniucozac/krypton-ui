import { ComponentPropsWithoutRef } from "react";

type Size = "sm" | "md" | "lg";

type ContainerBaseType = {
  fluid?: boolean;
  size?: Size;
};

type ContainerType = ContainerBaseType & {
  children?: React.ReactNode;
};

export type WrapperStyledProps = ContainerBaseType;

export type BreakpointProps = Record<Size, string>;

export type ContainerProps = ComponentPropsWithoutRef<"div"> & ContainerType;
