import { memo } from "react";
import { CardImageProps } from "./types";
import { Image } from "./Card.styles";

export const CardImage = memo(
  ({ imgSrc, className, alt = "", height = "auto" }: CardImageProps, props) => {
    return (
      <Image
        {...props}
        src={imgSrc}
        className={className}
        alt={alt}
        height={height}
      />
    );
  }
);
