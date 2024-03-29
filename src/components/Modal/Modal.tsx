import React, { useEffect, useRef, memo, useState } from "react";
import { ModalProps, ModalHeaderProps } from "./types";
import { Wrapper, Background } from "./Modal.styles";
import { ReactPortal } from "./ReactPortal";

export const Modal = memo(
  ({ children, isOpen, onClose, ...props }: ModalProps) => {
    const [active, setActive] = useState(false);
    const backdrop = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const { current } = backdrop;

      const transitionEnd = () => setActive(isOpen);

      const onEscapeKeyUp = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      const clickHandler = (event: Event) =>
        event.target === current && onClose();

      if (current) {
        current.addEventListener("transitionend", transitionEnd);
        current.addEventListener("click", clickHandler);
        window.addEventListener("keyup", onEscapeKeyUp);
      }

      if (isOpen) {
        window.setTimeout(() => {
          setActive(isOpen);
          document.querySelector("#root")?.setAttribute("inert", "true");
        }, 10);
      }

      return () => {
        if (current) {
          current.removeEventListener("transitionend", transitionEnd);
          current.removeEventListener("click", clickHandler);
        }

        document.querySelector("#root")?.removeAttribute("inert");
        window.removeEventListener("keyup", onEscapeKeyUp);
      };
    }, [isOpen, onClose]);

    return (
      <>
        {(isOpen || active) && (
          <ReactPortal>
            <Background
              ref={backdrop}
              className={active && isOpen ? "active" : ""}
            >
              <Wrapper className="modal-content" {...props}>
                {React.Children.map(children, (child) => {
                  if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                      onClose,
                    } as ModalHeaderProps);
                  }
                })}
              </Wrapper>
            </Background>
          </ReactPortal>
        )}
      </>
    );
  }
);
