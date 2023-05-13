import React, { useCallback } from "react";
import {
  Div,
  Image,
  LandingPageCard,
  Heading,
  Paragraph,
  Button,
  Span,
  Break,
  LinkComponent,
} from "components";
import { useLocation } from "react-router-dom";

export const HeroSection = React.memo(
  ({
    headingText,
    subHeadingText,
    paragraphText,
    paragraphText2,
    primaryButtonText,
    outlinedButtonText,
    cardData,
    coverImage,
    imagePath,
    mobileDetector,
  }) => {
    const { pathname } = useLocation();
    const renderCoverPageHeading = useCallback(() => {
      if (pathname === "/full-stack-engineer-course") {
        const headingData = headingText.split(/ (?=Full)/g);
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingData[0]}</Span>
            <Break />
            <Span>{headingData[1]}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{subHeadingText}</Span>
          </Heading>
        );
      } else if (pathname === "/digital-marketing-course") {
        const headingData = headingText.split(/ (?=Professional)/g);
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingData[0]}</Span>
            <Break />
            <Span>{headingData[1]}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/java-full-stack-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/data-science-and-machine-learning-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/full-stack-web-development-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/cloud-computing-and-devops-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/train-the-trainer-program") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/design-thinking-and-ui-ux-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/programming-fundamentals-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/java-programming-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/python-programming-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/mysql-database-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/linux-and-aws-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/html-css-javascript-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/c-programming-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/cpp-programming-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/data-structure-and-algorithm-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/power-bi-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/mentorship-program") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/wordpress-and-blogging-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/google-ads-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/social-media-marketing-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/search-engine-optimization-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/content-marketing-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else if (pathname === "/affiliate-marketing-course") {
        return (
          <Heading headingClass="text-primary fw-bold fs-30">
            <Span spanClass="fw-bold text-dark">{headingText}</Span>
            <Break />
            <Span spanClass="fw-bold text-primary">{subHeadingText}</Span>
            <Break />
            <Span spanClass="fs-20 text-dark">{paragraphText}</Span>
          </Heading>
        );
      } else {
        return "";
      }
    }, [pathname, headingText, paragraphText, subHeadingText]);

    return (
      <Div
        divClass={
          mobileDetector
            ? "row align-items-center"
            : "row align-items-center h-100-vh"
        }
      >
        <Div divClass="col-sm-12 col-md-7 col-lg-6 ">
          <Image
            width="1200"
            height="800"
            imagePath={coverImage ? coverImage : imagePath}
            imageClass={`img-fluid ${mobileDetector ? "mt-5" : ""}`}
            imageAltText="learn2earnlabs-home-cover"
          />
        </Div>
        <Div divClass="col-sm-12 col-md-5 col-lg-6">
          {headingText && renderCoverPageHeading()}
          {paragraphText2 && (
            <Paragraph paragraphClass="fs-30-2 fw-bold align-justify">
              {paragraphText2}
            </Paragraph>
          )}

          <Div
            divClass={
              mobileDetector ? "d-grid gap-2 col-6 mx-auto mb-4" : "w-100"
            }
          >
            {primaryButtonText === "Join Now" ? (
              <LinkComponent
                pathName="/contact-us"
                linkClass={
                  mobileDetector
                    ? `btn btn-primary rounded-0 border-0 mt-3`
                    : "btn btn-primary rounded-0 border-0 mt-3 w-25"
                }
              >
                {primaryButtonText}
              </LinkComponent>
            ) : (
              <Button
                buttonClass={
                  mobileDetector
                    ? `btn btn-primary rounded-0 border-0 mt-3`
                    : "btn btn-primary rounded-0 border-0 mt-3 w-25"
                }
              >
                {primaryButtonText}
              </Button>
            )}
            {outlinedButtonText && (
              <Button
                buttonClass={`btn btn-outline-primary rounded-0 mt-3 ${
                  mobileDetector ? "w-100" : "ms-3"
                }`}
              >
                {outlinedButtonText}
              </Button>
            )}
          </Div>
        </Div>
        <Div divClass="text-bg-primary border-light d-lg-flex">
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
