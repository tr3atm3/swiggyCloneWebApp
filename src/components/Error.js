import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      Error
      <h3>{err.status}</h3>
    </div>
  );
};

export default Error;
