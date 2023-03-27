import React from "react";
import { Div, SubHeading } from "components";

export const StudentReviews = React.memo(() => {
  return (
    <Div divClass="container mb-5 mt-5">
      <Div divClass="row">
        <SubHeading subheadingClass="fw-bold text-center">
          Student Reviews
        </SubHeading>
      </Div>
      <Div divClass="row mt-5"></Div>
    </Div>
  );
});
