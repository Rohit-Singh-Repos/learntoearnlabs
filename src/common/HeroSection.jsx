import React, { useState, useEffect } from "react";
import {
  Div,
  Image,
  LandingPageCard,
  Heading,
  Paragraph,
  Button,
} from "components";

export const HeroSection = React.memo(
  ({
    headingText,
    paragraphText,
    primaryButtonText,
    outlinedButtonText,
    cardData,
    coverImage,
    imagePath,
    mobileDetector
  }) => {

    return (
      <Div divClass={mobileDetector ? "row align-items-center" : "row align-items-center h-100-vh"}>
        <Div divClass="col-sm-12 col-md-7 col-lg-6">
          <Image
            width="1200"
            height="800"
            imagePath={coverImage ? coverImage : imagePath}
            imageClass="img-fluid"
            imageAltText="learn2earnlabs-home-cover"
          />
        </Div>
        <Div divClass="col-sm-12 col-md-5 col-lg-6">
          {headingText && (
            <Heading headingClass="text-primary fw-bold fs-30">{headingText}</Heading>
          )}
          {paragraphText && (
            <Paragraph paragraphClass="fs-30 align-justify">
              {paragraphText}
            </Paragraph>
          )}
          {primaryButtonText && (
            <Div divClass={mobileDetector ? "d-grid gap-2 col-6 mx-auto mb-4" : "w-100"}>
            <Button buttonClass={mobileDetector ? `btn btn-primary rounded-0 border-0 mt-3` : "btn btn-primary rounded-0 border-0 mt-3 w-25"}>
              {primaryButtonText}
            </Button>
          </Div>
          )}
          {outlinedButtonText && (
            <Button buttonClass={`btn btn-outline-primary rounded-0 mt-3 ${mobileDetector ? "w-100" : "ms-3"}`}>
              {outlinedButtonText}
            </Button>
          )}
        </Div>
        <Div divClass="text-bg-primary border-light d-lg-flex ">
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
