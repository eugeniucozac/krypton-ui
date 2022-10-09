import React, { memo, useState, useEffect } from "react";

export const AccordionAction = memo(
  ({ child, allowMultiple, ...props }: any) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      console.log("show 2", show);
    }, [show]);

    return React.cloneElement(child, {
      show,
      setShow,
      allowMultiple,
      ...props,
    });
  }
);
