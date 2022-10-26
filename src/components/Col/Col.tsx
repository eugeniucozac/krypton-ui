import { memo } from "react";
import { ColProps } from "./types";
import { Wrapper } from "./Col.styles";

const Col = memo(
  (
    {
      children,
      className,
      xs = 12,
      sm = false,
      md = false,
      lg = false,
      flex = false,
      offsetXs = 0,
      offsetSm = 0,
      offsetMd = 0,
      offsetLg = 0,
    }: ColProps,
    props
  ) => {
    return (
      <Wrapper
        {...props}
        className={className}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        flex={flex}
        offsetXs={offsetXs}
        offsetSm={offsetSm}
        offsetMd={offsetMd}
        offsetLg={offsetLg}
      >
        {children}
      </Wrapper>
    );
  }
);

export default Col;
