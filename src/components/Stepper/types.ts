import React, { ComponentPropsWithRef } from "react";
import { Color } from "../../types";

type Orientation = "horizontal" | "vertical";

type ObjectStepType = {
  label: string;
  icon?: React.ReactNode;
};

type StepperType = {
  children: React.ReactNode;
  activeStep: number;
  color?: Color;
  orientation?: Orientation;
};

type StepType = {
  activeStep?: number;
  orientation?: Orientation;
  index?: number;
  step: ObjectStepType;
  showStatus?: boolean;
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
