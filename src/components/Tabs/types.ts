import { ComponentPropsWithoutRef } from "react";
import { Color } from "../../types";

export type Orientation = "horizontal" | "vertical";

export type Alignment = "left" | "right";

type TabCommonType = {
  children: React.ReactNode;
  activeTab?: number;
};

type VariantTabsType = {
  orientation?: Orientation;
  alignment?: Alignment;
};

type OnChangeColorType = {
  onChange?: (value: number) => void;
  color?: Color;
};

type TabType = VariantTabsType &
  OnChangeColorType & {
    label: string | React.ReactNode;
    value?: number;
    disabled?: boolean;
    active?: boolean;
    alignment?: Alignment;
  };

type TabPanelType = TabCommonType & {
  index?: number;
};

export type VariantTabsStyledProps = VariantTabsType;

export type LinkStyledProps = VariantTabsStyledProps & {
  disabled: boolean;
  onClick: () => void;
  color?: Color;
  active?: boolean;
};

export type PanelStyledProps = {
  activeTab?: number;
  index?: number;
};

export type ContentStyledProps = {
  orientation?: Orientation;
};

export type TabListProps = ComponentPropsWithoutRef<"ul"> &
  TabCommonType &
  VariantTabsType &
  OnChangeColorType;

export type TabPanelsProps = ComponentPropsWithoutRef<"div"> &
  TabCommonType &
  VariantTabsType;

export type TabsProps = ComponentPropsWithoutRef<"div"> &
  TabCommonType &
  VariantTabsType;

export type TabProps = ComponentPropsWithoutRef<"li"> & TabType;

export type TabPanelProps = ComponentPropsWithoutRef<"div"> & TabPanelType;

export type TabContentProps = ComponentPropsWithoutRef<"div"> & TabCommonType;
