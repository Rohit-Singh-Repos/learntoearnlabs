import React from "react";
import { LandingPageCardBorder } from "styles/homePage/homePageStyles";
import { Div, Heading, Paragraph, Image } from "components";

export const LandingPageCard = React.memo(
  ({ heading, subHeading, borderShow }) => {
    return (
      <Div divClass="card d-flex flex-lg-row align-items-center col-sm-12 col-md-6 col-lg-3 bg-transparent border-0 text-center">
        <Div divClass="card-body">
          <Heading>{heading}</Heading>
          <Paragraph>{subHeading}</Paragraph>
        </Div>
        {borderShow && <LandingPageCardBorder />}
      </Div>
    );
  }
);

export const CommonCard = React.memo(({ cardClass, children, verticalAlign }) => {
  return (
    <Div divClass={cardClass}>
      <Div divClass={verticalAlign ? "card-body d-flex justify-content-center align-items-center" : "card-body"}>{children}</Div>
    </Div>
  );
});

export const CardImage = React.memo(
  ({
    directorName,
    directorQualification,
    imagePath,
    imageClass,
    imageAltText,
    cardClass,
    children,
  }) => {
    return (
      <Div divClass={cardClass}>
        <Div divClass="row g-0">
          <Div divClass="col-md-3 col-lg-3 d-flex flex-column align-items-start">
            <Image
              imagePath={imagePath}
              imageClass={imageClass}
              imageAltText={imageAltText}
            />
            {directorName && (
              <Paragraph paragraphClass="fw-bold">
                {directorName} <br />
                {directorQualification}
              </Paragraph>
            )}
          </Div>
          <Div divClass="col-md-9 col-lg-9">
            <Div divClass="card-body">{children}</Div>
          </Div>
        </Div>
      </Div>
    );
  }
);
