import React, { ComponentPropsWithRef } from "react";
import { IconName } from "../Icon/types";
import { ColorCodes } from "../../types";

type BaseType = {
  children?: React.ReactNode | string;
  allowMultiple?: boolean;
};

type IndexValueType = {
  value?: number[];
  index?: number;
};

type AccordionType = BaseType & {
  value: number[];
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

export type AccordionProps = ComponentPropsWithRef<"div"> & AccordionType;

export type AccordionPanelProps = ComponentPropsWithRef<"div"> &
  AccordionPanelType;

export type AccordionItemProps = ComponentPropsWithRef<"div"> &
  AccordionItemType;

export type AccordionDescriptionProps = ComponentPropsWithRef<"div"> &
  AccordionDescriptionType;

export type AccordionTitleProps = ComponentPropsWithRef<"button"> &
  AccordionTitleType;
