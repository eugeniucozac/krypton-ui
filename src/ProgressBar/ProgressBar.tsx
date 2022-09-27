import { memo } from "react";
import { ProgressBarProps } from "./types";
import { Wrapper, Line, Label } from "./ProgressBar.styles";

const ProgressBar = memo(
  (
    { color = "success", showValue = false, value }: ProgressBarProps,
    props
  ) => {
    const progress = Math.max(0, Math.min(value, 100));

    return (
      <Wrapper {...props} color={color} withValue={showValue}>
        {showValue && <Label color={color}>{progress}%</Label>}
        <Line color={color} value={progress}></Line>
      </Wrapper>
    );
  }
);

export default ProgressBar;
