import React from "react";
import { Div, Image, LandingPageCard, Heading, Paragraph, Button } from "components";

export const HeroSection = React.memo(
  ({ headingText, paragraphText, primaryButtonText, outlinedButtonText, cardData }) => {
    return (
      <Div divClass="row align-items-center mb-5">
        <Div divClass="col-sm-12 col-md-6 col-lg-7"></Div>
        <Div divClass="col-sm-12 col-md-6 col-lg-5">
          {headingText && (
            <Heading headingClass="text-primary fw-bold">{headingText}</Heading>
          )}
          {paragraphText && <Paragraph>{paragraphText}</Paragraph>}
          {primaryButtonText && (
            <Button buttonClass="btn btn-primary rounded-0 border-0 me-4 mt-3">
              {primaryButtonText}
            </Button>
          )}
          {outlinedButtonText && (
            <Button buttonClass="btn btn-outline-primary rounded-0 mt-3">
              {outlinedButtonText}
            </Button>
          )}
        </Div>
        <Div divClass="text-bg-primary border-light mt-5 d-lg-flex">
          {cardData && cardData.length !== 0 ? (
            cardData.map((item) => (
              <LandingPageCard
                key={item.id}
                heading={item.heading}
                subHeading={item.subHeading}
                borderShow={item.borderShow}
              />
            ))
          ) : (
            <></>
          )}
        </Div>
      </Div>
    );
  }
);
