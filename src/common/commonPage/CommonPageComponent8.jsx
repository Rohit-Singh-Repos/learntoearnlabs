import React, { useCallback, useState } from "react";
import {
  Div,
  Paragraph,
  Accordion,
  CommonCard,
  SubHeading,
  TextInput,
  SelectInput,
  Button,
  Image,
  Alert,
} from "components";
import { MdOutlinePhoneInTalk } from "assets/icons";
import axios from "axios";

export const ProgramDetails = React.memo(
  ({ sectionData, inputSchemas, mobileDetector, courseDetector }) => {
    const {
      programDetailsSection: {
        headingText,
        paragraphText,
        moduleTextData,
        contactCardData1: { phoneNumber } = {},
        contactCardData2: { buttonText } = {},
        discountAndOffersSection: { discountHeadingText, discountCard } = {},
      } = {},
    } = sectionData;
    const { textInput, selectInputOptions } = inputSchemas;
    const [showAlert, setShowAlert] = useState(false);
    const [courseData, setCourseData] = useState({
      studentName: "",
      studentEmail: "",
      studentMobile: "",
      courseName: "",
      professional: "",
    });
    const handleInputData = useCallback(
      (e) => {
        const { name, value } = e.target;
        setCourseData({
          ...courseData,
          [name]: value,
        });
      },
      [courseData]
    );
    const submitQuery = async() => {
      const {
        studentName,
        studentEmail,
        studentMobile,
        professional,
      } = courseData;

      if (studentName && studentEmail && studentMobile && professional) {
        try {
          const response = await axios(
            `${process.env.REACT_APP_API_BASE_URL}/api/queries/`,
            {
              method: "POST",
              data: {
                name: studentName,
                email: studentEmail,
                number: studentMobile,
                datetime: new Date().toLocaleString(),
                specialization:courseDetector, // Newly added field kindly add into the DB
                profession: professional,
              },
            }
          );
        } catch (error) {
          alert(error);
        }
        setShowAlert(false);
      } else {
        setShowAlert(true);
      }
    };
    return (
      <Div divClass="container mt-5">
        <Div divClass="row">
          <SubHeading subheadingClass="fw-bold mb-4">{headingText}</SubHeading>
          <Div divClass="col-sm-12 col-md-6 col-lg-8">
            <Paragraph paragraphClass="align-justify">
              {paragraphText}
            </Paragraph>
            <Accordion accordionData={moduleTextData} />
          </Div>
          <Div divClass="col-sm-12 col-md-6 col-lg-4">
            <CommonCard
              cardClass={`card rounded-0 col-sm-12 col-md-12 col-lg-12 text-center ${
                mobileDetector ? "mt-3" : ""
              }`}
            >
              <Paragraph paragraphClass="fw-bold fs-25">
                Feel free to call
              </Paragraph>
              <SubHeading subheadingClass="text-primary fw-bold">
                <MdOutlinePhoneInTalk size={30} /> {phoneNumber}
              </SubHeading>
            </CommonCard>
            {showAlert && <Alert setShowAlert={setShowAlert}/>}
            <CommonCard cardClass="card rounded-0 col-sm-12 col-md-12 col-lg-12 mt-3">
              <SubHeading subheadingClass="text-center fw-bold mb-5">
                Request More Information
              </SubHeading>
              {textInput && textInput.length !== 0 ? (
                textInput.map((item, index) => (
                  <TextInput
                    textInputClass="form-control mb-3 rounded-0 outline-0"
                    key={item.id}
                    textInputValue={
                      item.textInputName !== "courseName"
                        ? Object.values(courseData)[index]
                        : courseDetector
                    }
                    textInputType={item.textInputType}
                    textInputPlaceholder={item.textInputPlaceholder}
                    textInputName={item.textInputName}
                    textInputHandler={
                      item.textInputName !== "courseName"
                        ? handleInputData
                        : () => {}
                    }
                  />
                ))
              ) : (
                <></>
              )}
              <SelectInput
                selectInputName="professional"
                selectInputData={selectInputOptions}
                selectInputClass="form-select rounded-0"
                value={courseData.professional}
                onChange={handleInputData}
              />
              <Div divClass="d-grid mt-5">
                <Button
                  buttonClass="btn btn-primary rounded-0"
                  buttonHandler={submitQuery}
                >
                  {buttonText}
                </Button>
              </Div>
            </CommonCard>
          </Div>
          <Div divClass="row col-sm-12 col-md-12 col-lg-12 d-flex justify-content-around mt-5 pt-3">
            <SubHeading subheadingClass="fw-bold">
              {discountHeadingText}
            </SubHeading>
            {discountCard && discountCard.length !== 0 ? (
              discountCard.map((item) => (
                <CommonCard
                  cardClass="rounded-0 col-sm-12 col-md-4 col-lg-4 text-center mt-5"
                  key={item.id}
                >
                  <Image
                    imagePath={item.cardImage}
                    imageClass="img-fluid mb-3"
                    imageAltText=""
                    width={200}
                    height={200}
                  />
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
  }
);
