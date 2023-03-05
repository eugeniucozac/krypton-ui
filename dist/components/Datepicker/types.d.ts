import { ComponentProps } from "react";
import { type Dayjs } from "dayjs";
import { Color } from "../../types";
type CalendarType = {
    color?: Color;
    selectedDate: Dayjs;
    onChange: any;
    required?: boolean;
    fullWidth?: boolean;
    placeholder?: string;
    hideInput?: boolean;
};
type CurrentMonthType = {
    currentMonth?: boolean;
};
type RowType = CurrentMonthType & {
    day: number;
    value: Dayjs;
};
type RowCellType = CurrentMonthType & {
    selected: boolean;
};
type InputBaseType = {
    fullWidth?: boolean;
    endIcon: React.ReactNode;
};
type InputBaseStyleType = {
    color?: Color;
    readOnly?: boolean;
};
type CalendarWrapperStyleType = {
    hideInput: boolean;
};
export type InnerStyledProps = InputBaseType;
export type CalendarWrapperStyleProps = CalendarWrapperStyleType;
export type InputFieldStyledProps = InputBaseType & InputBaseStyleType;
export type RowProps = RowType;
export type RowCellProps = RowCellType;
export type CalendarProps = ComponentProps<"div"> & CalendarType;
export {};
