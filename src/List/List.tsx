import { memo } from "react";
import Avatar from "../Avatar";
import { ListProps } from "./types";
import { AvatarWrapper, Wrapper, Item } from "./List.styles";

const List = memo(({ className, items }: ListProps, props) => {
  return (
    <Wrapper {...props} className={className}>
      {items.map(({ title, avatar }, iter) => (
        <Item key={iter}>
          {avatar && (
            <AvatarWrapper>
              <Avatar
                name={avatar.name}
                color="success"
                imgSrc={avatar.imgSrc}
              />
            </AvatarWrapper>
          )}
          {title}
        </Item>
      ))}
    </Wrapper>
  );
});

export default List;
