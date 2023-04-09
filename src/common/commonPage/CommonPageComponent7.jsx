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
import { MdLocationPin } from "assets/icons";

export const TrainingMode = React.memo(({ sectionData, mobileDetector }) => {
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
    <Div divClass="container mt-5 pt-3">
      <SubHeading subheadingClass="fw-bold mb-4">{headingText}</SubHeading>
      <Div divClass="row">
        <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <CommonCard cardClass="card rounded-0 p-4 h-100">
            <SubHeading subheadingClass="fw-bold fs-25 text-center">
              {headingText1}
            </SubHeading>
            <UnorderedList unorderedListClass="mt-5">
              {listTextData && listTextData.length !== 0 ? (
                listTextData.map((item) => (
                  <ListItem key={item.id} listItemClass="mt-3">
                    {item.listText}
                  </ListItem>
                ))
              ) : (
                <></>
              )}
            </UnorderedList>
            <Div
              divClass={
                mobileDetector
                  ? "d-grid gap-2"
                  : "d-grid gap-2 col-6 mx-auto mt-5"
              }
            >
              <Button buttonClass="btn btn-primary rounded-0 border-0">
                {buttonText1}
              </Button>
            </Div>
          </CommonCard>
        </Div>
        <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <CommonCard cardClass="card rounded-0 bg-primary text-white p-4 h-100">
            <Heading headingClass="fw-bold fs-25 text-center">
              {headingText2}
            </Heading>
            <Div divClass="row">
              <Div divClass="col-sm-2 col-md-2 col-lg-2 mt-5 pt-3">
                <MdLocationPin color="#fff" size={80}/>
              </Div>
              <Div
                divClass={
                  mobileDetector
                    ? "col-sm-10 col-md-10 col-lg-10 mt-5 pt-3"
                    : "col-sm-10 col-md-10 col-lg-10 mt-5 mb-5 pb-5"
                }
              >
                <Paragraph paragraphClass="fw-bold">{addressHeading}</Paragraph>
                <Paragraph>{addressText}</Paragraph>
                <Paragraph>{phoneText}</Paragraph>
              </Div>
            </Div>
            <Div
              divClass={
                mobileDetector
                  ? "d-grid gap-2"
                  : "d-grid mt-5d-grid col-6 mx-auto"
              }
            >
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
