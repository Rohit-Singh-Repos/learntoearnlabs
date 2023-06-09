import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { Div, Alert, Span } from "components";
import { Button } from "./Button";
import { SubHeading } from "./Text";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Anchor } from "./Anchor";
import { SYLLABUSES } from "assets/syllabus";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const modalContainer = document.getElementById("popup");

const ModalUI = React.memo(
  ({ modalHandler, children, emailData, coursedetector, detector, setEmail }) => {
    const { pathname } = useLocation();
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [alertMessage, setAlertMessage] = useState("")
    const download = async () => {
      if(emailData){
        const emailRegExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        if(emailData.match(emailRegExp)){
          try {
            setShowAlertSuccess(true)
            let response = await axios(`${process.env.REACT_APP_API_BASE_URL}/api/syllabuses`,{
              method:"POST",
              data:{
                email:emailData,
                specialization:detector ? coursedetector + " " + detector : coursedetector,
                datetime:new Date().toLocaleString(),
              },
            })
            if(response && response.status === 200){
              setShowAlertSuccess(false)
              setEmail("")
              document.getElementById("download_btn").click();
              modalHandler(false)
            }else{
              setShowAlertDanger(true)
              setAlertMessage("Something went wrong1")
              setShowAlertSuccess(false)
              setEmail("")
            }
          } catch (error) {
            setShowAlertDanger(true)
            setAlertMessage("Something went wrong2")
            setShowAlertSuccess(false)
            setEmail("")
          }
        }else{
          setShowAlertDanger(true)
          setAlertMessage("Enter valid email address")
          setShowAlertSuccess(false)
          setEmail("")
        }
      }else{
        setShowAlertDanger(true)
        setAlertMessage("Email address can't be empty.")
        setShowAlertSuccess(false)
        setEmail("")
      }
    };

    const getFileName = useMemo(() => {
      if (pathname === "/full-stack-engineer-course") {
        return SYLLABUSES.FullStackEngineer;
      } else if (pathname === "/digital-marketing-course") {
        if (detector === "3 Months") {
          return SYLLABUSES.DigitalMarketingThreeMonths;
        } else if (detector === "6 Months") {
          return SYLLABUSES.DigitalMarketingSixMonths;
        } else {
          return SYLLABUSES.DigitalMarketingOneYear;
        }
      } else if (pathname === "/java-full-stack-course") {
        return SYLLABUSES.JavaFullStack;
      } else if (pathname === "/data-science-and-machine-learning-course") {
        return SYLLABUSES.DataScienceAndMachineLearning;
      } else if (pathname === "/full-stack-web-development-course") {
        return SYLLABUSES.FullStackWebDevlopment;
      } else if (pathname === "/cloud-computing-and-devops-course") {
        return SYLLABUSES.CloudComputing;
      } else if (pathname === "/train-the-trainer-program") {
        return SYLLABUSES.TrainTheTrainer;
      } else if (pathname === "/design-thinking-and-ui-ux-course") {
        return SYLLABUSES.DesignThinking;
      } else if (pathname === "/programming-fundamentals-course") {
        return SYLLABUSES.ProgrammingFundamentals;
      } else if (pathname === "/java-programming-course") {
        return SYLLABUSES.JavaProgramming;
      } else if (pathname === "/python-programming-course") {
        return SYLLABUSES.PythonProgramming;
      } else if (pathname === "/mysql-database-course") {
        return SYLLABUSES.MySQLDatabase;
      } else if (pathname === "/linux-and-aws-course") {
        return SYLLABUSES.LinuxAndAws;
      } else if (pathname === "/html-css-javascript-course") {
        return SYLLABUSES.HTMLCSS;
      } else if (pathname === "/c-programming-course") {
        return SYLLABUSES.CProgramming;
      } else if (pathname === "/cpp-programming-course") {
        return SYLLABUSES.CPPProgramming;
      } else if (pathname === "/data-structure-and-algorithm-course") {
        return SYLLABUSES.DataStructure;
      } else if (pathname === "/power-bi-course") {
        return SYLLABUSES.PowerBi;
      } else if (pathname === "/mentorship-program") {
        return SYLLABUSES.MentorShip;
      } else if (pathname === "/wordpress-and-blogging-course") {
        return SYLLABUSES.Wordpress;
      } else if (pathname === "/google-ads-course") {
        return SYLLABUSES.GoogleAds;
      } else if (pathname === "/social-media-marketing-course") {
        return SYLLABUSES.SocialMediaMarketing;
      } else if (pathname === "/search-engine-optimization-course") {
        return SYLLABUSES.SearchEngineOptimization;
      } else if (pathname === "/content-marketing-course") {
        return SYLLABUSES.ContentMarketing;
      } else if (pathname === "/affiliate-marketing-course") {
        return SYLLABUSES.AffiliateMarketing;
      } else {
        return "No Data";
      }
    }, [pathname,detector]);

    return (
      <Div divClass="modal modal-bg rounded-0">
        <Div divClass="modal-dialog modal-dialog-centered ">
          <Div divClass="modal-content rounded-0">
            <Div divClass="modal-header">
              <SubHeading subheadingClass="modal-title">
                Enter your email to continue
              </SubHeading>
              <Button
                type="button"
                buttonClass="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                buttonHandler={() => modalHandler(false)}
              />
            </Div>
            <Div divClass="modal-body">
              {showAlertDanger && <Alert alertMessage={alertMessage} alertType="alert-danger fw-bold" setShowAlert={setShowAlertDanger}/>}
              {children}
            </Div>
            <Div divClass="modal-footer">
              <Button
                type="button"
                buttonClass="btn btn-primary rounded-0"
                data-bs-dismiss="modal"
                buttonHandler={download}
              >
                {
                  showAlertSuccess ? <>
                    Please wait <Span spanClass="spinner-border spinner-border-sm" role="status" aria-hidden="true"></Span>
                  </> : "Download"
                }              
              </Button>
              <Anchor
                href={getFileName}
                download={coursedetector}
                style={{ display: "none" }}
                id="download_btn"
              >
                Download
              </Anchor>
            </Div>
          </Div>
        </Div>
      </Div>
    );
  }
);

export const ModalComponent = React.memo(
  ({ modalHandler, children, emailData, coursedetector, detector, setEmail }) => {
    return ReactDOM.createPortal(
      <ModalUI
        detector={detector}
        modalHandler={modalHandler}
        emailData={emailData}
        coursedetector={coursedetector}
        setEmail={setEmail}
      >
        {children}
      </ModalUI>,
      modalContainer
    );
  }
);
