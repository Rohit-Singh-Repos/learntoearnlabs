import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import { Div } from "./Div";
import { Button } from "./Button";
import { SubHeading } from "./Text";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Anchor } from "./Anchor";
import { SYLLABUSES } from "assets/syllabus";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const modalContainer = document.getElementById("popup");

const ModalUI = React.memo(
  ({ modalHandler, children, emailData, coursedetector, detector }) => {
    const { pathname } = useLocation();
    const download = async () => {
      try {
        let response = await axios(`${process.env.REACT_APP_API_BASE_URL}/api/syllabuses`,{
          method:"POST",
          data:{
            email:emailData,
            specialization:detector ? coursedetector + " " + detector : coursedetector,
            datetime:new Date().toLocaleString(),
          },
        })

        if(response && response.status === 200){
          document.getElementById("download_btn").click();
          modalHandler(false)
        }
      } catch (error) {
        alert(error)
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
    }, [pathname]);

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
            <Div divClass="modal-body">{children}</Div>
            <Div divClass="modal-footer">
              <Button
                type="button"
                buttonClass="btn btn-primary rounded-0"
                data-bs-dismiss="modal"
                buttonHandler={download}
              >
                Download
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
  ({ modalHandler, children, emailData, coursedetector, detector }) => {
    return ReactDOM.createPortal(
      <ModalUI
        detector={detector}
        modalHandler={modalHandler}
        emailData={emailData}
        coursedetector={coursedetector}
      >
        {children}
      </ModalUI>,
      modalContainer
    );
  }
);
