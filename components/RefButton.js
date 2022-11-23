import { Button } from "@chakra-ui/react";
import React from "react";

const RefButton = React.forwardRef((props, ref) => (
  <Button ref={ref} {...props}>
    {props.children}
  </Button>
));

export default RefButton;
