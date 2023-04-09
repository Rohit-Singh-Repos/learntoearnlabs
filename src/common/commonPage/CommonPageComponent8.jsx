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
  Image
} from "components";

export const ProgramDetails = React.memo(({ sectionData, inputSchemas }) => {
  const {
    programDetailsSection: {
      headingText,
      paragraphText,
      moduleTextData,
      contactCardData1: { phoneNumber } = {},
      contactCardData2: { buttonText } = {},
      discountAndOffersSection : {discountHeadingText,discountCard} = {},
    } = {},
  } = sectionData;
  const { textInput, selectInputOptions } = inputSchemas;
  return (
    <Div divClass="container mt-5 pt-3">
      <Div divClass="row">
        <Heading headingClass="fw-bold mb-4">{headingText}</Heading>
        <Div divClass="col-sm-12 col-md-6 col-lg-8">
          <Paragraph paragraphClass="align-justify">{paragraphText}</Paragraph>
          <Accordion accordionData={moduleTextData} />
        </Div>
        <Div divClass="col-sm-12 col-md-6 col-lg-4">
          <CommonCard cardClass="card rounded-0 col-sm-12 col-md-12 col-lg-12">
            <Paragraph paragraphClass="fw-bold fs-25">
              Feel free to call
            </Paragraph>
            <SubHeading subheadingClass="text-primary fw-bold">
              {phoneNumber}
            </SubHeading>
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
            <Button buttonClass="btn btn-primary rounded-0 mt-3">
              {buttonText}
            </Button>
          </CommonCard>
        </Div>
        <Div divClass="row col-sm-12 col-md-12 col-lg-12 d-flex justify-content-around mt-5 pt-3">
          <Heading headingClass="fw-bold">{discountHeadingText}</Heading>
          {discountCard && discountCard.length !== 0 ? (
            discountCard.map((item) => (
              <CommonCard
                cardClass="rounded-0 col-sm-12 col-md-4 col-lg-4 text-center mt-5"
                key={item.id}
              >
                <Image imagePath={item.cardImage} imageClass="img-fluid mb-3" imageAltText="" width={200} height={200}/>
                <Paragraph>{item.cardText}</Paragraph>
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