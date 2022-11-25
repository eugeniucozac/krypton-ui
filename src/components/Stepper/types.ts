import React, { ComponentPropsWithoutRef } from "react";
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
  completed?: React.ReactNode;
  progress?: React.ReactNode;
  pending?: React.ReactNode;
};

type StepType = {
  step: ObjectStepType;
  activeStep?: number;
  orientation?: Orientation;
  index?: number;
  showStatus?: boolean;
  completed?: React.ReactNode;
  progress?: React.ReactNode;
  pending?: React.ReactNode;
};

export type StatusStyledProps = {
  status: string;
};

export type OrientationStyledProps = {
  orientation: Orientation;
};

export type CommonStyledProps = StatusStyledProps & OrientationStyledProps;

export type StepperProps = ComponentPropsWithoutRef<"div"> & StepperType;

export type StepProps = ComponentPropsWithoutRef<"div"> & StepType;
