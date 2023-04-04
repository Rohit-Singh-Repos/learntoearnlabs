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

export const ApplyNow = React.memo(({ sectionData, inputSchemas }) => {
  const {
    applyNowSection: {
      headingText,
      paragraphText,
      buttonText,
      subheadingText,
      paragrphTextData,
    } = {},
  } = sectionData;
  const { textInput, selectInputOptions } = inputSchemas;

  return (
    <Div divClass="container mt-5">
      <Div divClass="row d-flex justify-content-between">
        <Heading headingClass="fw-bold">{headingText}</Heading>
        <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <CommonCard cardClass="card rounded-0">
            <Paragraph paragraphClass="align-justify">
              {paragraphText}
            </Paragraph>
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

        <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <CommonCard cardClass="row card rounded-0">
            <SubHeading>{subheadingText}</SubHeading>
            {paragrphTextData && paragrphTextData.length !== 0 ? (
              paragrphTextData.map((item) => (
                <Div divClass="row" key={item.id}>
                  <Div divClass="col-sm-3 col-md-3 col-lg-3">Hello</Div>
                  <Div divClass="col-sm-9 col-md-9 col-lg-9">{item.text}</Div>
                </Div>
              ))
            ) : (
              <></>
            )}
          </CommonCard>
        </Div>
      </Div>
    </Div>
  );
});
