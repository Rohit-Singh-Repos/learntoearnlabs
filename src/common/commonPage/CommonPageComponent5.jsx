import React from "react";
import {
  Div,
  CommonCard,
  Paragraph,
  Heading,
  UnorderedList,
  ListItem,
  SubHeading,
  Button,
} from "components";

export const CloudDevopsTraining = React.memo(({ sectionData }) => {
  const {
    cloudDevopsTrainingSection: {
      headingText,
      paragraphText,
      buttonText,
      cardData,
    } = {},
  } = sectionData;
  return (
    <Div divClass="container mt-5 pt-3">
      <Div divClass="row">
        <Div divClass="col-sm-12 col-md-5 col-lg-5">
            <CommonCard cardClass="bg-primary p-3 h-100">
                <SubHeading subheadingClass="fw-bold text-light">{headingText}</SubHeading>
                <Paragraph paragraphClass="align-justify mt-4 text-light">{paragraphText}</Paragraph>
                <Button buttonClass="btn btn-light rounded-0">{buttonText}</Button>
            </CommonCard>
        </Div>
        <Div divClass="row col-sm-12 col-md-7 col-lg-7">
          {
            cardData && cardData.length !== 0 ? cardData.map((item) => (
              <>
                <Div divClass="col-sm-4 col-md-4 col-lg-4"></Div>
                <Div divClass="col-sm-8 col-md-8 col-lg-8">
                  <SubHeading>{item.subheadingText}</SubHeading>
                  <Paragraph>{item.paragraphText}</Paragraph>
                </Div>
              </>
            )) : <></>
          }
        </Div>
      </Div>  
    </Div>
  );
});
