import { ComponentPropsWithoutRef } from "react";
import { Color, Size } from "../../types";

type UnderlineType = "none" | "hover" | "always";

type LinkBaseType = {
  color?: Color;
  size?: Size;
  underline?: UnderlineType;
};

type LinkType = LinkBaseType & {
  children: React.ReactNode;
  href: string;
};

export type WrapperStyledProps = LinkBaseType;

export type LinkProps = ComponentPropsWithoutRef<"a"> & LinkType;
