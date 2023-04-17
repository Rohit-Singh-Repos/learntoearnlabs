import React from "react";
import {
  Div,
  CommonCard,
  Paragraph,
  SubHeading,
  Button,
  Image,
} from "components";

export const CloudDevopsTraining = React.memo(
  ({ sectionData, mobileDetector }) => {
    const {
      cloudDevopsTrainingSection: {
        headingText,
        paragraphText,
        buttonText,
        cardData,
      } = {},
    } = sectionData;

    return (
      <Div divClass="container mt-5">
        <Div divClass="row">
          <Div divClass="col-sm-12 col-md-5 col-lg-5">
            <CommonCard cardClass="bg-primary p-3 h-100 pt-5 ps-5 pe-5 d-flex">
              <SubHeading subheadingClass="fw-bold text-light text-center fs-25">
                {headingText}
              </SubHeading>
              <Paragraph paragraphClass="align-justify mt-4 text-light">
                {paragraphText}
              </Paragraph>
              <Div
                divClass={
                  mobileDetector ? "d-grid" : "d-grid col-6 mx-auto mt-5"
                }
              >
                <Button buttonClass="btn btn-light rounded-0 mt-5">
                  {buttonText}
                </Button>
              </Div>
            </CommonCard>
          </Div>
          <Div
            divClass={
              mobileDetector
                ? "col-sm-12 col-md-7 col-lg-7 mt-4"
                : "row col-sm-12 col-md-7 col-lg-7"
            }
          >
            {cardData && cardData.length !== 0 ? (
              cardData.map((item) => (
                <Div key={item.id} divClass="d-flex mb-2">
                  <Div divClass="col-sm-2 col-md-2 col-lg-2">
                    <Image
                      imagePath={item.imagePath}
                      imageAltText=""
                      width={100}
                      height={80}
                    />
                  </Div>
                  <Div
                    divClass={
                      mobileDetector
                        ? "ms-2 col-sm-10 col-md-10 col-lg-10"
                        : "col-sm-10 col-md-10 col-lg-10"
                    }
                  >
                    <SubHeading
                      subheadingClass={
                        mobileDetector ? "fs-14 fw-bold" : "fs-17 fw-bold"
                      }
                    >
                      {item.subheadingText}
                    </SubHeading>
                    <Paragraph
                      paragraphClass={
                        mobileDetector
                          ? "fs-12 align-justify"
                          : "fs-14 align-justify"
                      }
                    >
                      {item.paragraphText}
                    </Paragraph>
                  </Div>
                </Div>
              ))
            ) : (
              <></>
            )}
          </Div>
        </Div>
      </Div>
    );
  }
);
