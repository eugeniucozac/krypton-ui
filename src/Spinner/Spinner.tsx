import { memo } from "react";
import { SpinnerProps } from "./types";
import { Background, Path, Wrapper } from "./Spinner.styles";

const Spinner = memo(
  ({ color = "success", size = "md" }: SpinnerProps, props) => {
    return (
      <Wrapper viewBox="0 0 50 50" {...props} size={size}>
        <Background
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          color={color}
        />
        <Path
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          color={color}
        />
      </Wrapper>
    );
  }
);

export default Spinner;
