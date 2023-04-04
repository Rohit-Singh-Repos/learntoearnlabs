import React from "react";
import {
  Div,
  Paragraph,
  Heading,
  Accordion,
  CommonCard,
  SubHeading,
  TextInput,
  SelectInput,
  Button,
} from "components";

export const ProgramDetails = React.memo(({ sectionData, inputSchemas }) => {
  const {
    programDetailsSection: {
      headingText,
      paragraphText,
      moduleTextData,
      contactCardData1: { phoneNumber } = {},
      contactCardData2: { buttonText } = {},
      discountAndOffersSection : {discountHeadingText,cardText1,cardText2} = {},
    } = {},
  } = sectionData;
  const { textInput, selectInputOptions } = inputSchemas;
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
        <Heading headingClass="fw-bold">{headingText}</Heading>
        <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <Paragraph paragraphClass="align-justify">{paragraphText}</Paragraph>
          <Accordion accordionData={moduleTextData} />
        </Div>
        <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <CommonCard cardClass="card rounded-0 col-sm-12 col-md-12 col-lg-12">
            <Paragraph>Contact Us</Paragraph>
            <SubHeading>{phoneNumber}</SubHeading>
          </CommonCard>
          <CommonCard cardClass="card rounded-0 col-sm-12 col-md-12 col-lg-12 mt-3">
            <SubHeading subheadingClass="text-center fw-bold">
              Request More Information
            </SubHeading>
            {textInput && textInput.length !== 0 ? (
              textInput.map((item) => (
                <TextInput
                  textInputClass="form-control mb-3 rounded-0 outline-0"
                  key={item.id}
                  textInputType={item.textInputType}
                  textInputPlaceholder={item.textInputPlaceholder}
                  textInputName={item.textInputName}
                />
              ))
            ) : (
              <></>
            )}
            <SelectInput
              selectInputName="professional"
              selectInputData={selectInputOptions}
              selectInputClass="form-select rounded-0"
            />
            <Button buttonClass="btn btn-primary rounded-0 mt-3">{buttonText}</Button>
          </CommonCard>
        </Div>
        <Div divClass="row col-sm-12 col-md-12 col-lg-12 d-flex justify-content-around">
          <Heading headingClass="fw-bold">{discountHeadingText}</Heading>
          <CommonCard cardClass="card rounded-0 col-sm-12 col-md-4 col-lg-4 text-center mt-5">{cardText1}</CommonCard>
          <CommonCard cardClass="card rounded-0 col-sm-12 col-md-4 col-lg-4 text-center mt-5">{cardText2}</CommonCard>
        </Div>
      </Div>
    </Div>
  );
});
