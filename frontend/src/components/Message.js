import { Alert } from "react-bootstrap";

import React from "react";

const Message = ({ children, variant = "info" }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default Message;
