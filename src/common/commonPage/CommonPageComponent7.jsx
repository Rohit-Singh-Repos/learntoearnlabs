import React from "react";
import {
  Div,
  Paragraph,
  Heading,
  CommonCard,
  SubHeading,
  UnorderedList,
  ListItem,
  Button,
} from "components";

export const TrainingMode = React.memo(({ sectionData }) => {
  const {
    trainingModeSection: {
      headingText,
      cardData1: { headingText1, listTextData, buttonText1 } = {},
      cardData2: {
        headingText2,
        addressHeading,
        addressText,
        phoneText,
        buttonText2,
      } = {},
    } = {},
  } = sectionData;
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
        <Heading headingClass="fw-bold">{headingText}</Heading>
        <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <CommonCard cardClass="card rounded-0 p-4">
            <SubHeading subheadingClass="fw-bold">{headingText1}</SubHeading>
            <UnorderedList>
              {listTextData && listTextData.length !== 0 ? (
                listTextData.map((item) => (
                  <ListItem key={item.id}>{item.listText}</ListItem>
                ))
              ) : (
                <></>
              )}
            </UnorderedList>
            <Button buttonClass="btn btn-primary rounded-0 border-0">
              {buttonText1}
            </Button>
          </CommonCard>
        </Div>
        <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <CommonCard cardClass="row card rounded-0 bg-primary text-white p-4">
            <SubHeading subheadingClass="fw-bold">{headingText2}</SubHeading>
            <Div divClass="col-sm-4 col-md-4 col-lg-4"></Div>
            <Div divClass="col-sm-8 col-md-8 col-lg-8">
              <Paragraph paragraphClass="fw-bold">{addressHeading}</Paragraph>
              <Paragraph>{addressText}</Paragraph>
              <Paragraph>{phoneText}</Paragraph>
              <Button buttonClass="btn btn-outline-light rounded-0">
                {buttonText2}
              </Button>
            </Div>
          </CommonCard>
        </Div>
      </Div>
    </Div>
  );
});
