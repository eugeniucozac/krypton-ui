import React, { ComponentPropsWithoutRef } from "react";
import { Color } from "../../types";

type ItemType = {
  label: string;
  value: boolean;
};

type TransferListType = {
  children: React.ReactNode[];
  leftItems: ItemType[];
  rightItems: ItemType[];
  setLeftItems: (value: ItemType[]) => void;
  setRightItems: (value: ItemType[]) => void;
  color?: Color;
  allChoices?: boolean;
  leftChoicesLabel?: string;
  rightChoicesLabel?: string;
};

type TransferListCommonType = {
  label: string;
  onChange: (value: ItemType[]) => void;
};

export type CheckboxStyledProps = {
  checked: boolean;
};

export type TransferListProps = ComponentPropsWithoutRef<"div"> &
  TransferListType;

export type TransferListItemProps = TransferListCommonType & {
  value: any;
  items?: ItemType[];
};

export type TransferListHeaderProps = TransferListCommonType & {
  children: React.ReactNode;
  checkedItemsLength: number;
  items: ItemType[];
};

export type ItemProps = ComponentPropsWithoutRef<"div"> & ItemType;
