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

export const CommonCard = React.memo(({ cardClass, children }) => {
  return (
    <Div divClass={cardClass}>
      <Div divClass="card-body">{children}</Div>
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
          <Div divClass="col-md-4">
            <Image
              imagePath={imagePath}
              imageClass={imageClass}
              imageAltText={imageAltText}
            />
            {directorName && (
              <Paragraph paragraphClass="fw-bold">{directorName}</Paragraph>
            )}
            {directorQualification && (
              <Paragraph paragraphClass="fw-bold">
                {directorQualification}
              </Paragraph>
            )}
          </Div>
          <Div divClass="col-md-8">
            <Div divClass="card-body">{children}</Div>
          </Div>
        </Div>
      </Div>
    );
  }
);
