import { memo, useState } from "react";
import { usePopper } from "react-popper";
import { TooltipProps } from "./types";
import { Wrapper, Title, Inner } from "./Tooltip.styles";

const Tooltip = memo(
  ({ children, title, placement = "top" }: TooltipProps, props) => {
    const [reference, setReference] = useState<HTMLDivElement | null>(null);
    const [tooltip, setTooltip] = useState<HTMLDivElement | null>(null);
    const [arrow, setArrow] = useState<HTMLDivElement | null>(null);
    const { styles, attributes } = usePopper(reference, tooltip, {
      placement,
      modifiers: [{ name: "arrow", options: { element: arrow } }],
    });

    return (
      <Wrapper {...props} placement={placement}>
        <div ref={setReference}>{children}</div>
        <Title
          ref={setTooltip}
          style={styles.popper}
          {...attributes.popper}
          role="tooltip"
        >
          <Inner placement={placement}>
            {title}
            <div ref={setArrow} style={styles.arrow}></div>
          </Inner>
        </Title>
      </Wrapper>
    );
  }
);

export default Tooltip;
