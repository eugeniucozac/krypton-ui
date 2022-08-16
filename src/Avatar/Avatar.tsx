import { memo } from "react";
import { AvatarProps } from "./types";
import { initials } from "../utils/string";
import { Wrapper } from "./Avatar.styles";

const Avatar = memo(
  (
    { className, name, imgSrc, size = "md", color = "success" }: AvatarProps,
    props
  ) => {
    const init = initials(name);
    return (
      <Wrapper {...props} className={className} size={size} color={color}>
        {imgSrc ? <img src={imgSrc} alt={init} /> : init}
      </Wrapper>
    );
  }
);

export default Avatar;
