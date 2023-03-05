import { memo } from "react";
import Icon from "../Icon";
import { AdvancedAlertProps } from "./types";
import { Wrapper, Button } from "./AdvancedAlert.styles";

const AdvancedAlert = memo(
  ({ children, color = "info", onClose, ...props }: AdvancedAlertProps) => {
    return (
      <Wrapper {...props} color={color} onClose={onClose}>
        <div>{children}</div>
        {onClose && (
          <Button onClick={onClose} color={color}>
            <Icon name="close" />
          </Button>
        )}
      </Wrapper>
    );
  }
);

export default AdvancedAlert;
