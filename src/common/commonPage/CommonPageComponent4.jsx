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

export const CareerOptions = React.memo(({ sectionData }) => {
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
    <Div divClass="container mt-5">
      <Heading headingClass="fw-bold">{headingText}</Heading>
      <Paragraph paragraphClass="align-justify">{paragraphText}</Paragraph>
      <Div divClass="row d-flex justify-content-between">
        <Div divClass="col-sm-12 col-md-6 col-lg-5">
          <CommonCard cardClass="card rounded-0">
            <SubHeading subheadingClass="fw-bold">
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
        <Div divClass="col-sm-12 col-md-6 col-lg-5">
          <CommonCard cardClass="card rounded-0">
            <SubHeading subheadingClass="fw-bold">
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
