import { ComponentProps } from "react";
type RowType = {
    children?: React.ReactNode;
    /**
     * Lorem Ipsum is not simply random text. It has roots in a piece of classical Lati.
     */
    className?: string;
};
export type RowProps = ComponentProps<"div"> & RowType;
export {};
