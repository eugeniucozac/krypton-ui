import { memo, useState } from "react";
import { usePopper } from "react-popper";
import { TooltipProps } from "./types";
import { Wrapper, Title, Inner } from "./Tooltip.styles";

const Tooltip = memo(
  ({
    children,
    title,
    arrow = true,
    placement = "top",
    ...props
  }: TooltipProps) => {
    const [reference, setReference] = useState<HTMLDivElement | null>(null);
    const [tooltip, setTooltip] = useState<HTMLDivElement | null>(null);
    const [arrowIcon, setArrowIcon] = useState<HTMLDivElement | null>(null);
    const { styles, attributes } = usePopper(reference, tooltip, {
      placement,
      modifiers: [{ name: "arrow", options: { element: arrowIcon } }],
    });

    return (
      <Wrapper {...props} placement={placement}>
        <div ref={setReference}>{children}</div>
        <Title
          {...attributes.popper}
          ref={setTooltip}
          style={styles.popper}
          role="tooltip"
        >
          <Inner placement={placement}>
            {title}
            {arrow && <div ref={setArrowIcon} style={styles.arrow}></div>}
          </Inner>
        </Title>
      </Wrapper>
    );
  }
);

export default Tooltip;
