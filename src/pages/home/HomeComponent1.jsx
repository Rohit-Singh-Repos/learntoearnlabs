import React from "react";
import { LandingPageCard, Div, Paragraph, Button } from "components";
import { MainCard } from "common";
import { homePageSchema } from "schemas";

export const LandingPage = React.memo(() => {
  return (
    <Div divClass="container mb-5 mt-5">
      <Div divClass="row align-items-center mb-5">
        <Div divClass="col-sm-12 col-md-7 col-lg-8">HomePage</Div>
        <Div divClass="col-sm-12 col-md-5 col-lg-4">
          <Paragraph>
            When no one understand your talent, then we believe that you have
            the capabilities to do miracles…
          </Paragraph>
          <Button buttonClass="btn btn-primary border-0 rounded-0">
            Join Now
          </Button>
        </Div>
        <MainCard
          cardData={homePageSchema}
        />
      </Div>
    </Div>
  );
});
