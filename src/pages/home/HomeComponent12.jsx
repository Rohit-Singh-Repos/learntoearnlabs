import React from "react";
import { Div, Paragraph, SubHeading } from "components";

export const Placements = React.memo(() => {
  return (
    <Div divClass="container mb-5 mt-5">
      <Div divClass="row">
        <SubHeading subheadingClass="fw-bold text-center">
          Placements & Tie-ups
        </SubHeading>
        <Paragraph paragraphClass="align-justify text-center text-15">
          Our students are working with renowned companies and are happy with
          their careers. <br />
          We also have tie-ups with 300+ corporate professionals.
        </Paragraph>
      </Div>
      <Div divClass="row mt-5"></Div>
    </Div>
  );
});
