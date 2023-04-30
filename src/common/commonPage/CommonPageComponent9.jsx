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
import { FaUserGraduate, AiOutlineGroup, FiMonitor } from "assets/icons"

export const ApplyNow = React.memo(({ sectionData, inputSchemas, mobileDetector }) => {
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
        <SubHeading subheadingClass="fw-bold mb-5">{headingText}</SubHeading>
        <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <CommonCard cardClass="card rounded-0">
            <Paragraph paragraphClass="align-justify mb-4">
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
            <Div divClass="d-grid gap-2 col-6 mx-auto mt-4">
                  <Button buttonClass="btn btn-primary rounded-0">{buttonText}</Button>
                </Div>
          </CommonCard>
        </Div>

        <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <CommonCard cardClass={`row card rounded-0 h-100 ${mobileDetector ? "mt-3" : ""}`}>
            <SubHeading subheadingClass="mb-5 fw-bold">{subheadingText}</SubHeading>
            {paragrphTextData && paragrphTextData.length !== 0 ? (
              paragrphTextData.map((item,index) => (
                <Div key={item.id} divClass={`${mobileDetector ? "" : "row"} d-flex align-items-center mt-4`} >
                  <Div divClass="col-sm-1 col-md-1 col-lg-1 pe-3">{
                    index === 0 ? <FaUserGraduate className="text-primary" size={mobileDetector ? 40 : 50}/> : index === 1 ? <FiMonitor className="text-primary" size={mobileDetector ? 40 : 50}/> : <AiOutlineGroup className="text-primary" size={mobileDetector ? 40 : 50}/>
                  }</Div>
                  <Div divClass="col-sm-11 col-md-11 col-lg-11 ps-4">{item.text}</Div>
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
