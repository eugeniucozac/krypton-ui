import { ComponentProps } from "react";
import { Color } from "../types";

export type Variant = "horizontal" | "vertical";

export type TabsAlign = "left" | "right";

type TabBaseType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  value?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type VariantTabsType = {
  variant?: Variant;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  tabsAlign?: TabsAlign;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type OnChangeColorType = {
  onChange?: any; // ??
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type TabItemType = VariantTabsType &
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
  };

type TabPanelType = TabBaseType & {
  reference?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type VariantTabsStyledProps = {
  variant: Variant;
  tabsAlign: TabsAlign;
};

export type LinkStyledProps = VariantTabsStyledProps & {
  color: Color;
  active: boolean;
  disabled: boolean;
  onClick: any; //???
};

export type PanelStyledProps = {
  value: number;
  reference: number;
};

export type ContentStyledProps = {
  variant: Variant;
};

export type TabsProps = ComponentProps<"ul"> &
  TabBaseType &
  VariantTabsType &
  OnChangeColorType;

export type TabsContainerProps = ComponentProps<"ul"> &
  TabBaseType &
  VariantTabsType;

export type TabItemProps = ComponentProps<"li"> & TabItemType;

export type TabPanelProps = ComponentProps<"div"> & TabPanelType;

export type TabContentProps = ComponentProps<"div"> & TabBaseType;
