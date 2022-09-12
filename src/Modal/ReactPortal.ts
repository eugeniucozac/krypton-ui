import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { ReactPortalType } from "./types";

const createBackground = (backgroundClassName: string) => {
  const backgroundElement = document.createElement("div");
  backgroundElement.setAttribute("class", backgroundClassName);
  document.body.appendChild(backgroundElement);
  return backgroundElement;
};

export const ReactPortal = ({
  children,
  backgroundClassName = "modal-background",
}: ReactPortalType) => {
  const [backgroundElement, setBackgroundElement] =
    useState<Element | null>(null);

  useLayoutEffect(() => {
    let modalBackground =
      document.getElementsByClassName(backgroundClassName)[0];
    let created = false;
    if (!modalBackground) {
      created = true;
      modalBackground = createBackground(backgroundClassName);
    }
    setBackgroundElement(modalBackground);

    return () => {
      if (created && modalBackground.parentNode) {
        modalBackground.parentNode.removeChild(modalBackground);
      }
    };
  }, [backgroundClassName]);

  if (backgroundElement === null) return null;

  return createPortal(children, backgroundElement);
};
