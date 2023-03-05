import React, { ComponentPropsWithoutRef, RefObject } from "react";
import { IconName } from "../Icon/types";
import { ColorCodes } from "../../types";
type BaseType = {
    children: React.ReactElement | React.ReactElement[];
    allowMultiple?: boolean;
};
type IndexValueType = {
    value?: number[] | number;
    index?: number;
};
type AccordionType = BaseType & {
    onChange: (value: number) => void;
    value?: number[] | number;
};
type AccordionTitleType = {
    children?: React.ReactNode;
    icon?: any;
    handleChange?: () => void;
    color?: ColorCodes;
};
type AccordionItemType = {
    children?: React.ReactNode;
    value?: any;
    index?: number;
    allowMultiple?: boolean;
    closeIcon?: IconName;
    openIcon?: IconName;
    onChange?: (value: number[] | number) => void;
    color?: ColorCodes;
};
type AccordionPanelType = BaseType & IndexValueType;
type AccordionDescriptionType = IndexValueType & {
    children: React.ReactNode;
    allowMultiple?: boolean;
    bodyRef?: RefObject<HTMLDivElement>;
    maxHeight?: number;
};
export type MaxHeightStyledProps = {
    maxHeight?: number;
};
export type AccordionProps = ComponentPropsWithoutRef<React.ElementType> & AccordionType;
export type AccordionPanelProps = ComponentPropsWithoutRef<"div"> & AccordionPanelType;
export type AccordionItemProps = ComponentPropsWithoutRef<"div"> & AccordionItemType;
export type AccordionDescriptionProps = ComponentPropsWithoutRef<"div"> & AccordionDescriptionType;
export type AccordionTitleProps = ComponentPropsWithoutRef<"button"> & AccordionTitleType;
export {};
