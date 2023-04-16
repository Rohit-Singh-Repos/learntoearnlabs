import React from "react";
import { CommonCard, Div, Image, LinkComponent, Paragraph, SubHeading } from "components";

export const WhoCanJoin = React.memo(({ sectionData }) => {
  const {
    whoCanJoinSection: {
      headingText,
      paragraphText1,
      paragraphText2,
      paragraphText3,
      secondSection,
      secondSection: { headingTextData, paragraphTextData, cardData } = {},
    } = {},
  } = sectionData;
  return (
    <Div divClass="container mt-5 pt-3">
      <Div divClass="row">
        <Div divClass="col-sm-12 col-md-12 col-lg-12">
          <SubHeading subheadingClass="fw-bold">{headingText}</SubHeading>
          <Paragraph paragraphClass="align-justify mt-4">
            {paragraphText1}
          </Paragraph>
          <Paragraph paragraphClass="align-justify mt-4">
            {paragraphText2}
          </Paragraph>
          <Paragraph paragraphClass="align-justify mt-4">
            {paragraphText3}
          </Paragraph>
        </Div>
        {secondSection && (
          <Div divClass="row col-sm-12 col-md-12 col-lg-12">
            <SubHeading subheadingClass="fw-bold">{headingTextData}</SubHeading>
            <Paragraph paragraphClass="align-justify mt-4">
              {paragraphTextData}
            </Paragraph>
            {cardData && cardData.length !== 0 ? (
              cardData.map((item,index) => (
                <Div key={item.id} divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                  <LinkComponent pathName={item.pathName}>
                    <CommonCard cardClass="card d-flex align-items-center rounded-0 h-100">
                      <Image
                        width={index !== 2 ? 200 : 350}
                        height={index !== 2 ? 200 : 350}
                        imagePath={item.cardImagePath}
                        imageClass="img-fluid"
                        imageAltText=""
                      />
                      <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                        {item.cardText}
                      </Paragraph>
                    </CommonCard>
                  </LinkComponent>
                </Div>
              ))
            ) : (
              <></>
            )}
          </Div>
        )}
      </Div>
    </Div>
  );
});
