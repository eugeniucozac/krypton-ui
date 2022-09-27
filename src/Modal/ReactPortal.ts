import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { ReactPortalType } from "./types";

const createBackground = (backdropClassName: string) => {
  const backgroundElement = document.createElement("div");
  backgroundElement.setAttribute("class", backdropClassName);
  document.body.appendChild(backgroundElement);
  return backgroundElement;
};

export const ReactPortal = ({
  children,
  backdropClassName = "modal-backdrop",
}: ReactPortalType) => {
  const [backgroundElement, setBackgroundElement] =
    useState<Element | null>(null);

  useLayoutEffect(() => {
    let modalBackground = document.getElementsByClassName(backdropClassName)[0];
    if (!modalBackground) {
      modalBackground = createBackground(backdropClassName);
    }
    setBackgroundElement(modalBackground);

    return () => {
      if (modalBackground.parentNode) {
        modalBackground.parentNode.removeChild(modalBackground);
      }
    };
  }, []);

  if (backgroundElement === null) return null;

  return createPortal(children, backgroundElement);
};
