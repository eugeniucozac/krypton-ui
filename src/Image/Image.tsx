import { memo } from "react";
import { ImageProps } from "./types";
import { Wrapper } from "./Image.styles";

const Image = memo(
  (
    { imgSrc, className, fluid = false, rounded = false }: ImageProps,
    props
  ) => {
    return (
      <Wrapper
        {...props}
        src={imgSrc}
        className={className}
        fluid={fluid}
        rounded={rounded}
      />
    );
  }
);

export default Image;
