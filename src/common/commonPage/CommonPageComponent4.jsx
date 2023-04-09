import React from "react";
import {
  Div,
  CommonCard,
  Paragraph,
  Heading,
  UnorderedList,
  ListItem,
  SubHeading,
} from "components";

export const CareerOptions = React.memo(({ sectionData, mobileDetector }) => {
  const {
    careerOptionSection: {
      headingText,
      cardHeadingText1,
      cardHeadingText2,
      paragraphText,
      cardParagraphText1,
      cardParagraphText2,
      cardListTextData1,
      cardListTextData2,
    } = {},
  } = sectionData;
  return (
    <Div divClass="container mt-5 pt-3">
      <SubHeading subheadingClass="fw-bold">{headingText}</SubHeading>
      <Paragraph paragraphClass="align-justify mt-4 mb-4">{paragraphText}</Paragraph>
      <Div divClass="row d-flex justify-content-between ">
        <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <CommonCard cardClass="card rounded-0 h-100">
            <SubHeading subheadingClass="fs-17 fw-bold text-center">
              {cardHeadingText1}
            </SubHeading>
            <Paragraph paragraphClass="align-justify">
              {cardParagraphText1}
            </Paragraph>
            <UnorderedList>
              {cardListTextData1 && cardListTextData1.length !== 0 ? (
                cardListTextData1.map((item) => (
                  <ListItem key={item.id}>{item.listText}</ListItem>
                ))
              ) : (
                <></>
              )}
            </UnorderedList>
          </CommonCard>
        </Div>
        <Div divClass={mobileDetector ? "col-sm-12 col-md-6 col-lg-6 mt-3" : "col-sm-12 col-md-6 col-lg-6"}>
          <CommonCard cardClass="card rounded-0 h-100">
            <SubHeading subheadingClass="fs-17 fw-bold text-center">
              {cardHeadingText2}
            </SubHeading>
            <Paragraph paragraphClass="align-justify">
              {cardParagraphText2}
            </Paragraph>
            <UnorderedList>
              {cardListTextData2 && cardListTextData2.length !== 0 ? (
                cardListTextData2.map((item) => (
                  <ListItem key={item.id}>{item.listText}</ListItem>
                ))
              ) : (
                <></>
              )}
            </UnorderedList>
          </CommonCard>
        </Div>
      </Div>
    </Div>
  );
});
