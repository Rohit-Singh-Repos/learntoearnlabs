import React from "react";
import { LandingPageCardBorder } from "styles/homePage/homePageStyles";
import { Div, Heading, Paragraph, Image, Span } from "components";

export const LandingPageCard = React.memo(
  ({ heading, subHeading, borderShow }) => {
    return (
      <Div divClass="card d-flex flex-lg-row align-items-center col-sm-12 col-md-6 col-lg-3 bg-transparent border-0 text-center">
        <Div divClass="card-body">
          <Heading headingClass="fw-bold">{heading}</Heading>
          <Paragraph paragraphClass="fw-bold">{subHeading}</Paragraph>
        </Div>
        {borderShow && <LandingPageCardBorder />}
      </Div>
    );
  }
);

export const CommonCard = React.memo(({ cardClass, children, verticalAlign }) => {
  return (
    <Div divClass={cardClass}>
      <Div divClass={verticalAlign ? "card-body flex-column d-flex justify-content-center align-items-center h-100" : "card-body h-100"}>{children}</Div>
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
        <Div divClass="row g-0 d-flex justify-content-center align-items-center">
          <Div divClass="col-md-3 col-lg-3 d-flex flex-column align-items-center justify-content-center">
            <Image
              imagePath={imagePath}
              imageClass={imageClass}
              imageAltText={imageAltText}
            />
            {directorName && (
              <>
                <Span spanClass="fw-bold">
                  {directorName} 
                </Span>
                <Span>
                  {directorQualification}
                </Span>
              </>
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
