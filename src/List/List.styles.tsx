import styled from "styled-components";

export const Wrapper = styled.ul`
  box-shadow: 0 3px 7px rgb(0 0 0 / 10%);
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  font-family: "SFProDisplay";
  font-size: 0.875rem;
  font-weight: 200;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  &:not(:first-of-type) {
    border-top: 1px solid rgb(196, 196, 196);
  }
`;

export const AvatarWrapper = styled.div`
  margin-right: 0.75rem;
`;
