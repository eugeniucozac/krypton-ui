import React, { ComponentPropsWithoutRef } from "react";
import { IconName } from "../Icon/types";
import { ColorCodes } from "../../types";

type BaseType = {
  children?: React.ReactNode;
  allowMultiple?: boolean;
};

type IndexValueType = {
  value?: any; //number[] | number
  index?: number;
};

type OnChangeType = {
  onChange?: (value: number[] | number) => void;
};

type AccordionType = BaseType & {
  value?: number[] | number;
  onChange: (value: number) => void;
};

type AccordionTitleType = {
  children?: React.ReactNode;
  icon?: any;
  handleChange?: any;
  color?: ColorCodes;
};

/*
type AccordionTitleType = BaseType &
  IndexValueType &
  OnChangeType & {
    closeIcon?: IconName;
    openIcon?: IconName;
    color?: ColorCodes;
  };
*/
//type AccordionItemType = BaseType & IndexValueType & OnChangeType;

type AccordionItemType = {
  children?: React.ReactNode;
  value?: any; //number[] | number
  index?: number;
  allowMultiple?: boolean;
  closeIcon?: IconName;
  openIcon?: IconName;
  onChange?: any;
  color?: ColorCodes;
};

type AccordionPanelType = BaseType & IndexValueType;

type AccordionDescriptionType = BaseType &
  IndexValueType & {
    bodyRef?: any;
    maxHeight?: any;
  };

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
