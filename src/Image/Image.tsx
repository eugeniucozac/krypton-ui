import { memo } from "react";
import { ImageProps } from "./types";
import { Wrapper } from "./Image.styles";

const Image = memo(
  (
    { imgSrc, className, fluid = false, rounded = false, alt = "" }: ImageProps,
    props
  ) => {
    return (
      <Wrapper
        {...props}
        src={imgSrc}
        className={className}
        fluid={fluid}
        alt={alt}
        rounded={rounded}
      />
    );
  }
);

export default Image;
