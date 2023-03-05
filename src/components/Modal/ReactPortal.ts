import { useMemo, useEffect } from "react";
import ReactDOM from "react-dom";

import { ReactPortalType } from "./types";

export const ReactPortal = ({
  children,
  parent,
  className,
}: ReactPortalType) => {
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    const target = parent ? parent : document.body;
    const classList = ["portal-container"];
    if (className)
      className.split(" ").forEach((item: string) => classList.push(item));
    classList.forEach((item) => element.classList.add(item));
    target.appendChild(element);
    return () => {
      target.removeChild(element);
    };
  }, [element, parent, className]);

  return ReactDOM.createPortal(children, element);
};
