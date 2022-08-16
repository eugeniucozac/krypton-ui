import { PropsWithChildren, memo } from "react";
import { BundleProps } from "./types";
import { Bundle } from "./Bundle.styles";

type Props = PropsWithChildren<BundleProps>;

export const BundleView = memo(
  ({
    text,
    children,
    className,
    variant = "default",
    size = "md",
    disabled = false,
    onClick,
  }: Props) => {
    return <Bundle>{children ? children : text}</Bundle>;
  }
);
