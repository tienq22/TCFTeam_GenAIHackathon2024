
import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
      <Spinner animation="grow" role="status" variant="warning" />
      <Spinner animation="grow" role="status" variant="secondary" />
      <Spinner animation="grow" role="status" variant="success" />
      <Spinner animation="grow" role="status" variant="danger" />
      <Spinner animation="grow" role="status" variant="warning" />
      <Spinner animation="grow" role="status" variant="info" />
      <Spinner animation="grow" role="status" variant="danger" />
      <Spinner animation="grow" role="status" variant="primary" />
    </div>
  );
};

export default Loader;


/*import { Spinner } from "react-bootstrap";
import React from "react";

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export default Loader;
 */