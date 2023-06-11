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
import { useNavigate } from "react-router-dom";
import { useHookstate } from "@hookstate/core"
import { PAGE_STATE } from "globalStore/globalState";

export const ProgramDetails = React.memo(
  ({ sectionData, inputSchemas, mobileDetector, courseDetector }) => {
    const { pageVisiblity } = useHookstate(PAGE_STATE)
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
    const navigate = useNavigate()
    const { textInput, selectInputOptions } = inputSchemas;
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [showAlertNetwork, setShowAlertNetwork] = useState(false);
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
          setShowAlertNetwork(false)
          setShowAlertDanger(false)
          if(response.status === 200){
            pageVisiblity.set(true)
            navigate("/thank-you")
          }
        } catch (error) {
          setShowAlertNetwork(true);
          setShowAlertDanger(false)
        }
      } else {
        setShowAlertDanger(true);
        setShowAlertNetwork(false)
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
            
            <CommonCard cardClass="card rounded-0 col-sm-12 col-md-12 col-lg-12 mt-3">
              <SubHeading subheadingClass="text-center fw-bold mb-5">
                Request More Information
              </SubHeading>
              {showAlertDanger && <Alert alertMessage="All fields are required" alertType="alert-danger" setShowAlert={setShowAlertDanger}/>}
            {showAlertNetwork && <Alert alertMessage="Something Went Wrong" alertType="alert-danger" setShowAlert={setShowAlertNetwork}/>}
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
