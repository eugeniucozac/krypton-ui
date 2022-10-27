import { memo } from "react";
import { CardImageProps } from "./types";
import { Image } from "./Card.styles";

const defaultProps: Partial<CardImageProps> = {
  alt: "",
};

export const CardImage = memo(({ ...props }: CardImageProps) => {
  const componentProps = {
    ...defaultProps,
    ...props,
  };

  return <Image {...componentProps} />;
});
