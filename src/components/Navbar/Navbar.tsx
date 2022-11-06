import React, { memo } from "react";
import { NavbarProps } from "./types";
import { Wrapper, Nav } from "./Navbar.styles";

export const Navbar = memo(
  ({ children, align = "left", color = "primary", ...props }: NavbarProps) => {
    return (
      <Wrapper {...props}>
        <Nav align={align}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                color,
              });
            }
          })}
        </Nav>
      </Wrapper>
    );
  }
);
