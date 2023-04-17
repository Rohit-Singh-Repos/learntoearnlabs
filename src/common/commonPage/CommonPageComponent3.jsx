import React from "react";
import { Div, CommonCard, Paragraph, Heading } from "components";

export const TrainingRoadMap = React.memo(({ sectionData, mobileDetector }) => {
  const {
    trainingRoadmapSection: {
      headingPrimaryText,
      headingSecondaryText,
      paragraphText,
      cardTextData,
    } = {},
  } = sectionData;
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
        <Div divClass="col-sm-12 col-md-5 col-lg-5">
          <Heading headingClass="text-primary fw-bold">
            {headingPrimaryText}
          </Heading>
          <Heading headingClass="fw-bold">{headingSecondaryText}</Heading>
          <Paragraph paragraphClass="align-justify mt-5">
            {paragraphText}
          </Paragraph>
        </Div>
        <Div
          divClass={
            mobileDetector
              ? "col-sm-12 col-md-7 col-lg-7"
              : "row col-sm-12 col-md-7 col-lg-7 d-flex justify-content-around align-items-center"
          }
        >
          {cardTextData && cardTextData.length !== 0 ? (
            cardTextData.map((item) => (
              <CommonCard
                key={item.id}
                verticalAlign={true}
                cardClass={mobileDetector ? "card mt-2 rounded-0 border-0 bg-primary text-light text-center fw-bold col-lg-5 pt-2 pb-2" : "card mt-2 rounded-0 border-0 bg-primary text-light text-center fw-bold col-lg-5 pt-2 pb-2 h-20"}
              >
                <Paragraph paragraphClass="card-text fw-bold text-center">
                  {item.cardText}
                </Paragraph>
              </CommonCard>
            ))
          ) : (
            <></>
          )}
        </Div>
      </Div>
    </Div>
  );
});
