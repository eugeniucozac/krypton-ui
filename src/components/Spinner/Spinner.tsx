import { memo } from "react";
import { SpinnerProps } from "./types";
import { Background, Path, Wrapper } from "./Spinner.styles";

const defaultProps: Partial<SpinnerProps> = {
  size: "md",
};

const Spinner = memo(({ color = "success", ...props }: SpinnerProps) => {
  const componentProps = {
    ...defaultProps,
    ...props,
  };

  return (
    <Wrapper {...componentProps} viewBox="0 0 50 50">
      <Background
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
        color={color}
      />
      <Path cx="25" cy="25" r="20" fill="none" strokeWidth="5" color={color} />
    </Wrapper>
  );
});

export default Spinner;
