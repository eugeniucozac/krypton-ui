import { ComponentPropsWithRef } from "react";

type Size = "sm" | "md" | "lg";

type ContainerType = {
  children?: React.ReactNode;
  fluid?: boolean;
  size?: Size;
};

export type WrapperStyledProps = {
  size?: Size;
  fluid?: boolean;
};

export type BreakpointProps = Record<Size, string>;

export type ContainerProps = ComponentPropsWithRef<"div"> & ContainerType;
