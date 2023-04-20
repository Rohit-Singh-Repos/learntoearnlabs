import React from "react";
import { CommonCard, Div, Image, LinkComponent, ListItem, Paragraph, Span, SubHeading, UnorderedList } from "components";

export const WhoCanJoin = React.memo(({ sectionData }) => {
  const {
    whoCanJoinSection: {
      headingText,
      paragraphText1,
      paragraphText2,
      paragraphText3,
      secondSectionForProgrammingDetails,
      secondSectionForFullStack,
      secondSectionForProgrammingDetails: { headingTextData, paragraphTextData, cardData } = {},
      secondSectionForFullStack:{
        headingTextDataForFullStack,
        paragraphText1ForFullStack,
        paragraphText2ForFullStack,
        listDataTextForFullStack,
        imagePathData
      } = {}
    } = {},
  } = sectionData;
  return (
    <Div divClass="container mt-5">
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
        {secondSectionForProgrammingDetails && (
          <Div divClass="row col-sm-12 col-md-12 col-lg-12">
            <SubHeading subheadingClass="fw-bold">{headingTextData}</SubHeading>
            <Paragraph paragraphClass="align-justify mt-4">
              {paragraphTextData}
            </Paragraph>
            {cardData && cardData.length !== 0 ? (
              cardData.map((item, index) => (
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
        {secondSectionForFullStack && (
          <Div divClass="row col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
            <Div divClass="col-sm-12 col-md-8 col-lg-8">
              <SubHeading subheadingClass="fw-bold">
                {headingTextDataForFullStack}
              </SubHeading>
              <Paragraph paragraphClass="align-justify mt-4">
                {paragraphText1ForFullStack}
              </Paragraph>
              <Span>{paragraphText2ForFullStack}</Span>
              <UnorderedList>
                {listDataTextForFullStack &&
                listDataTextForFullStack.length !== 0 ? (
                  listDataTextForFullStack.map((item, index) => (
                    <ListItem key={item.id}>
                      <Span spanClass="fw-bold">{item.headingText}</Span>
                      <Span>{item.normalText}</Span>
                    </ListItem>
                  ))
                ) : (
                  <></>
                )}
              </UnorderedList>
            </Div>
            <Div divClass="col-sm-12 col-md-3 col-lg-3">
              <Image
                imageAltText=""
                width={300}
                height={300}
                imageClass="img-thumbnail w-100"
                imagePath={imagePathData}
              />
            </Div>
          </Div>
        )}
      </Div>
    </Div>
  );
});
