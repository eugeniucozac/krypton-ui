import React, { ComponentPropsWithRef } from "react";
import { IconName } from "../Icon/types";
import { ColorCodes } from "../../types";

type BaseType = {
  children?: React.ReactNode | string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  allowMultiple?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type IndexValueType = {
  value?: number[];
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */

  index?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type AccordionType = BaseType & {
  value: number[];
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  onChange: (value: number) => void;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type AccordionTitleType = BaseType &
  IndexValueType & {
    closeIcon?: IconName;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
    openIcon?: IconName;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
    color?: ColorCodes;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
    onChange?: (value: number[] | number) => void;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
  };

type AccordionItemType = BaseType &
  IndexValueType & {
    onChange?: (value: number[] | number) => void;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
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
