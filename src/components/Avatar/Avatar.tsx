import { memo } from "react";
import { AvatarProps } from "./types";
import { getInitials } from "../../utils/string";
import { Wrapper } from "./Avatar.styles";

const defaultProps: Partial<AvatarProps> = {
  size: "md",
  color: "success",
};

const Avatar = memo(({ name, imgSrc, ...props }: AvatarProps) => {
  const componentProps = {
    ...defaultProps,
    ...props,
  };

  const initials = getInitials(name);
  return (
    <Wrapper {...componentProps}>
      {imgSrc ? <img src={imgSrc} alt={initials} /> : initials}
    </Wrapper>
  );
});

export default Avatar;
