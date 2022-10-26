import React, { memo, useState } from "react";

export const AccordionAction = memo(
  ({ child, allowMultiple, onChange, index, children, ...props }: any) => {
    const [show, setShow] = useState(false);

    const handleChange = () => {
      if (allowMultiple) {
        setShow(!show);
      } else {
        onChange(index);
      }
    };

    return React.cloneElement(child, {
      show,
      setShow,
      allowMultiple,
      handleChange,
      ...props,
    });
  }
);
