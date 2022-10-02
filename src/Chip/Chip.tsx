import { memo } from "react";
import { ChipProps } from "./types";
import { Wrapper, Title } from "./Chip.styles";

const defaultProps: Partial<ChipProps> = {
  size: "md",
  variant: "square",
  disabled: false,
};

const Chip = memo(({ children, color = "secondary", ...props }: ChipProps) => {
  const componentProps: ChipProps = {
    ...defaultProps,
    ...props,
  };

  return (
    <Wrapper {...componentProps} color={color}>
      <Title color={color}>{children}</Title>
    </Wrapper>
  );
});

export default Chip;
