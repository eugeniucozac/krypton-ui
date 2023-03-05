import React, { ComponentPropsWithoutRef } from "react";
import { Color } from "../../types";
type Orientation = "horizontal" | "vertical";
type BaseType = {
    orientation?: Orientation;
    completed?: React.ReactNode;
    progress?: React.ReactNode;
    pending?: React.ReactNode;
};
type ObjectStepType = {
    label: string;
    icon?: React.ReactNode;
};
type StepperType = BaseType & {
    children: React.ReactNode;
    activeStep: number;
    color?: Color;
};
type StepType = BaseType & {
    step: ObjectStepType;
    activeStep?: number;
    index?: number;
    showStatus?: boolean;
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
export {};
