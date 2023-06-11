import React from "react";
import { Div } from "./Div";
import { Span } from "./Text";
import { Button } from "./Button";

export const Alert = React.memo(({setShowAlert,alertMessage,alertType}) => {
  return (
    <Div
      divClass={`alert ${alertType} rounded-0 d-flex align-items-center alert-dismissible fade show mt-2`}
      role="alert"
    >
      <Span>{alertMessage}</Span>
      <Button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        buttonHandler={() => setShowAlert(false)}
      />
    </Div>
  );
});
