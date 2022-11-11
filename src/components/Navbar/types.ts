import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type Align = "left" | "right" | "center";

type ChildrenType = {};

type ActiveDisabledType = {
  active?: boolean;
  disabled?: boolean;
};

type NavbarType = ChildrenType & {
  align?: Align;
};

type NavSubItemType = ChildrenType & {
  title: string;
};

type NavItemType = ChildrenType &
  ActiveDisabledType & {
    to: string;
    color?: Color;
  };

export type NavStyledProps = {
  align: Align;
};

export type ItemStyledProps = ActiveDisabledType & {
  color?: Color;
};

export type AlignMetricProps = Record<Align, string>;

export type NavbarProps = ComponentPropsWithRef<"nav"> & NavbarType;

export type NavSubItemProps = ComponentPropsWithRef<"li"> & NavSubItemType;

export type NavItemProps = ComponentPropsWithRef<"li"> & NavItemType;
