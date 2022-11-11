import { ComponentPropsWithRef } from "react";
import { Color, Size } from "../../types";

type UnderlineType = "none" | "hover" | "always";

type LinkType = {
  children: React.ReactNode;
  href: string;
  underline?: UnderlineType;
  color?: Color;
  size?: Size;
};

export type WrapperStyledProps = {
  color?: Color;
  size?: Size;
  underline?: UnderlineType;
};

export type LinkProps = ComponentPropsWithRef<"a"> & LinkType;
