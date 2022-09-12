import { useEffect, useRef, memo } from "react";
import { CSSTransition } from "react-transition-group";
import { ModalProps } from "./types";
import { Wrapper, Background } from "./Modal.styles";
import { ReactPortal } from "./ReactPortal";

const Modal = memo(
  (
    { children, className, isOpen, onClose, color = "secondary" }: ModalProps,
    props
  ) => {
    const portalRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const onEscapeKeyDown = (event: KeyboardEvent) => {
      if ((event.charCode || event.keyCode) === 27) {
        onClose();
      }
    };

    const onClickOutside = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        onClose();
      }
    };

    useEffect(() => {
      document.addEventListener("keydown", onEscapeKeyDown);
      document.addEventListener("click", onClickOutside, true);
      return () => {
        document.removeEventListener("keydown", onEscapeKeyDown);
        document.removeEventListener("click", onClickOutside, true);
      };
    }, []);

    return (
      <ReactPortal wrapperId="modal-background">
        <CSSTransition
          in={isOpen}
          timeout={500}
          unmountOnExit
          classNames="modal"
          nodeRef={portalRef}
        >
          <Background isOpen={isOpen}>
            <Wrapper {...props} className={className} ref={wrapperRef}>
              <section>{children}</section>
            </Wrapper>
          </Background>
        </CSSTransition>
      </ReactPortal>
    );
  }
);

export default Modal;
