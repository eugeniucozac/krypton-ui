import { memo } from "react";
import { CardImageProps } from "./types";
import { Image } from "./Card.styles";

export const CardImage = memo(({ imgSrc, alt = "" }: CardImageProps, props) => {
  return <Image {...props} src={imgSrc} alt={alt} />;
});
