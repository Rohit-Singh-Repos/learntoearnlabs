import React,{useState, useCallback} from "react";
import {
  Div,
  Paragraph,
  CommonCard,
  SubHeading,
  TextInput,
  SelectInput,
  Button,
  Alert
} from "components";
import { FaUserGraduate, AiOutlineGroup, FiMonitor } from "assets/icons"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useHookstate } from "@hookstate/core"
import { PAGE_STATE } from "globalStore/globalState";

export const ApplyNow = React.memo(({ sectionData, inputSchemas, mobileDetector, courseDetector }) => {
  const navigate = useNavigate();
  const { pageVisiblity } = useHookstate(PAGE_STATE)
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const [showAlertDanger2, setShowAlertDanger2] = useState(false);
  const [showAlertNetwork, setShowAlertNetwork] = useState(false);
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
      const emailRegExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      if(studentEmail.match(emailRegExp)){
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
          setShowAlertDanger2(false)
          if(response.status === 200){
            setCourseData({
              ...courseData,
              studentName: "",
              studentEmail: "",
              studentMobile: "",
              professional: "",
            })
            navigate("/thank-you");
            pageVisiblity.set(true)
          }
        } catch (error) {
          setShowAlertNetwork(true);
          setShowAlertDanger(false)
          setShowAlertDanger2(false)
        }
      }else{
        setShowAlertDanger2(true)
        setShowAlertDanger(false)
        setShowAlertNetwork(false)
      }
    } else {
      setShowAlertDanger(true);
      setShowAlertNetwork(false)
      setShowAlertDanger2(false)
    }
  };

  return (
    <Div divClass="container mt-5" id="applyNow">
      <Div divClass="row d-flex justify-content-between">
        <SubHeading subheadingClass="fw-bold mb-5">{headingText}</SubHeading>
        <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <CommonCard cardClass="card rounded-0">
            <Paragraph paragraphClass="align-justify mb-4">
              {paragraphText}
            </Paragraph>
            {showAlertDanger && <Alert alertMessage="All fields are required" alertType="alert-danger fw-bold" setShowAlert={setShowAlertDanger}/>}
            {showAlertDanger2 && <Alert alertMessage="Enter valid email address" alertType="alert-danger fw-bold" setShowAlert={setShowAlertDanger2}/>}
            {showAlertNetwork && <Alert alertMessage="Something Went Wrong" alertType="alert-danger fw-bold" setShowAlert={setShowAlertNetwork}/>}
            {textInput && textInput.length !== 0 ? (
              textInput.map((item,index) => (
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
              onChange={handleInputData}
              value={courseData.professional}
            />
            <Div divClass="d-grid gap-2 col-6 mx-auto mt-4">
              <Button buttonHandler={submitQuery} buttonClass="btn btn-primary rounded-0">{buttonText}</Button>
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
