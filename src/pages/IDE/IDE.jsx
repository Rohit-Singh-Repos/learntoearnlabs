import { Div } from "components";
import React from "react";

export const IDE = React.memo(() => {
  return (
    <Div divClass="container mt-5">
      <iframe
        frameBorder="0"
        title="IDE"
        height="600px"
        src="https://onecompiler.com/embed/"
        width="100%"
      ></iframe>
    </Div>
  );
});
