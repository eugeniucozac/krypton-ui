import { memo } from "react";
import { BundleProps } from "./types";
import { Wrapper } from "./Calendar.styles";

const Calendar = memo(({ children }: BundleProps, props) => {
  return <Wrapper {...props}>{children}</Wrapper>;
});

export default Calendar;
