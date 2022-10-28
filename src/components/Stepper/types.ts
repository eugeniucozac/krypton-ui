import React, { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type Orientation = "horizontal" | "vertical";

type ObjectStepType = {
  label: string;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  icon?: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

type StepperType = {
  children: React.ReactNode;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  activeStep: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  color?: Color;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default default
   */
  orientation?: Orientation;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default horizontal
   */
};

type StepType = {
  activeStep?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  orientation?: Orientation;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   * @default horizontal
   */
  index?: number;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  step?: ObjectStepType;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
  showStatus?: boolean;
  /**
   * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
   */
};

export type StatusStyledProps = {
  status: string;
};

export type OrientationStyledProps = {
  orientation: Orientation;
};

export type CommonStyledProps = StatusStyledProps & OrientationStyledProps;

export type StepperProps = ComponentPropsWithRef<"div"> & StepperType;

export type StepProps = ComponentPropsWithRef<"div"> & StepType;
