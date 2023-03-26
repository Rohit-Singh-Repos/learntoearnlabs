import React from "react";
import { LandingPageCardBorder } from "styles/homePage/homePageStyles";
import { Div, Heading, Paragraph } from "components";

export const Card = React.memo(
  ({ cardText, cardText2, borderShow }) => {
    return (
      <Div divClass="card d-flex flex-lg-row align-items-center col-sm-12 col-md-6 col-lg-3 bg-transparent border-0 text-center">
        <Div divClass="card-body">
          <Heading>{cardText}</Heading>
          <Paragraph>{cardText2}</Paragraph>
        </Div>
        {borderShow && <LandingPageCardBorder />}
      </Div>
    );
  }
);
