import React, { ComponentPropsWithoutRef } from "react";
import { IconName } from "../Icon/types";
import { ColorCodes } from "../../types";

type BaseType = {
  children?: React.ReactNode;
  allowMultiple?: boolean;
};

type IndexValueType = {
  value?: number[];
  index?: number;
};

type AccordionType = BaseType & {
  value?: number[] | number;
  onChange: (value: number) => void;
};

type AccordionTitleType = BaseType &
  IndexValueType & {
    closeIcon?: IconName;
    openIcon?: IconName;
    color?: ColorCodes;
    onChange?: (value: number[] | number) => void;
  };

type AccordionItemType = BaseType &
  IndexValueType & {
    onChange?: (value: number[] | number) => void;
  };

type AccordionPanelType = BaseType & IndexValueType;

type AccordionDescriptionType = BaseType & IndexValueType;

export type MaxHeightStyledProps = {
  maxHeight?: number;
};

export type AccordionProps = ComponentPropsWithoutRef<"div"> & AccordionType;

export type AccordionPanelProps = ComponentPropsWithoutRef<"div"> &
  AccordionPanelType;

export type AccordionItemProps = ComponentPropsWithoutRef<"div"> &
  AccordionItemType;

export type AccordionDescriptionProps = ComponentPropsWithoutRef<"div"> &
  AccordionDescriptionType;

export type AccordionTitleProps = ComponentPropsWithoutRef<"button"> &
  AccordionTitleType;
