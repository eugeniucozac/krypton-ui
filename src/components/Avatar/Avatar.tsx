import { memo } from "react";
import { AvatarProps } from "./types";
import { initials } from "../../utils/string";
import { Wrapper } from "./Avatar.styles";

const defaultProps: Partial<AvatarProps> = {
  size: "md",
  color: "success",
};

const Avatar = memo(({ name, imgSrc, ...props }: AvatarProps) => {
  const componentProps: Omit<AvatarProps, "name"> = {
    ...defaultProps,
    ...props,
  };

  const init = initials(name);
  return (
    <Wrapper {...componentProps}>
      {imgSrc ? <img src={imgSrc} alt={init} /> : init}
    </Wrapper>
  );
});

export default Avatar;
