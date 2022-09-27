import { memo } from "react";
import Icon from "../Icon";
import { AdvancedAlertProps } from "./types";
import { Wrapper, Button } from "./AdvancedAlert.styles";

const AdvancedAlert = memo(
  ({ children, color = "info", onClose }: AdvancedAlertProps, props) => {
    return (
      <Wrapper color={color} onClose={onClose} {...props}>
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
