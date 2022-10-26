import { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

export type Orientation = "horizontal" | "vertical";

export type Alignment = "left" | "right";

type TabCommonType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  activeTab?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type VariantTabsType = {
  orientation?: Orientation;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  alignment?: Alignment;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type OnChangeColorType = {
  onChange?: (value: number) => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type TabType = VariantTabsType &
  OnChangeColorType & {
    label: string | React.ReactNode;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
    value?: number;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
    className?: string;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
    disabled?: boolean;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
    active?: boolean;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
    alignment?: Alignment;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
  };

type TabPanelType = TabCommonType & {
  index?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
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
