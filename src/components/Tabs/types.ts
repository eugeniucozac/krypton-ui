import { ComponentPropsWithRef } from "react";
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

export type VariantTabsStyledProps = {
  orientation?: Orientation;
  alignment?: Alignment;
};

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

export type TabListProps = ComponentPropsWithRef<"ul"> &
  TabCommonType &
  VariantTabsType &
  OnChangeColorType;

export type TabPanelsProps = ComponentPropsWithRef<"div"> &
  TabCommonType &
  VariantTabsType;

export type TabsProps = ComponentPropsWithRef<"div"> &
  TabCommonType &
  VariantTabsType;

export type TabProps = ComponentPropsWithRef<"li"> & TabType;

export type TabPanelProps = ComponentPropsWithRef<"div"> & TabPanelType;

export type TabContentProps = ComponentPropsWithRef<"div"> & TabCommonType;
