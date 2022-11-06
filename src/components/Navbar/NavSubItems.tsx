import { memo, useState, useRef, useEffect } from "react";
import Icon from "../Icon";
import { NavSubItemProps } from "./types";
import { SubItem, Button, DropDown } from "./Navbar.styles";

export const NavSubItems = memo(({ children, title }: NavSubItemProps) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  const handleClickOutside = (event: any) => {
    const { target } = event;

    if (ref.current && !ref.current.contains(target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <SubItem ref={ref}>
      <Button onClick={() => setShow(!show)}>
        {title}
        <Icon name="arrowDown" />
      </Button>
      {show && <DropDown>{children}</DropDown>}
    </SubItem>
  );
});
