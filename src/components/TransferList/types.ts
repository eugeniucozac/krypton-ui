import React, { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type ItemType = {
  label: string;
  value: boolean;
};

type TransferListType = {
  children: React.ReactNode[];
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  leftItems: ItemType[];
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  rightItems: ItemType[];
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  setLeftItems: (value: ItemType[]) => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  setRightItems: (value: ItemType[]) => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default default
   */
  allChoices?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  leftChoicesLabel?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  rightChoicesLabel?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type TransferListCommonType = {
  label: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onChange: (value: ItemType[]) => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  className?: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type CheckboxStyledProps = {
  checked: boolean;
};

export type TransferListProps = ComponentPropsWithRef<"div"> & TransferListType;

export type TransferListItemProps = TransferListCommonType & {
  value: any;
  items?: ItemType[];
};

export type TransferListHeaderProps = TransferListCommonType & {
  children: React.ReactNode;
  checkedItemsLength: number;
  items: ItemType[];
};

export type ItemProps = ComponentPropsWithRef<"div"> & ItemType;
