import { ComponentPropsWithoutRef } from "react";
import { Color } from "../../types";

type BreadcrumbsType = {
  children: React.ReactNode;
  separator?: string | React.ReactNode;
  color?: Color;
};

export type SeparatorStyledProps = {
  color: Color;
};

export type ItemWrapperStyledProps = {
  disabled: boolean;
};

export type BreadcrumbsProps = ComponentPropsWithoutRef<"nav"> &
  BreadcrumbsType;
