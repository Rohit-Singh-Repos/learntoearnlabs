import React, { useState, useEffect } from "react";
import { Div, Paragraph, SubHeading } from "components";

export const JobAssistance = React.memo(() => {
  const [handleRow, setHandleRow] = useState("row");

  const handleResize = () => {
    if (window.innerWidth < 990) {
      setHandleRow("");
    } else {
      setHandleRow("row");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <Div divClass="container mb-5 mt-5">
      <Div divClass="row">
        <SubHeading subheadingClass="fw-bold text-primary">
          We follow a dynamic & vibrant
        </SubHeading>
        <SubHeading subheadingClass="fw-bold">
          Job Assistance Execution Path
        </SubHeading>
        <Div divClass="col-lg-12 col-md-12 col-sm-12 mb-2">
          <Paragraph paragraphClass="pt-2 fs-6 align-justify">
            In present scenario providing job surety is easy, only we need to
            focus on outcome based learning and practical work enhancement. We
            know that every candidate is enough capable to understand the
            concepts and implement those concepts for improving his/her
            practical knowledge and experience. Hence we are following a dynamic
            & vibrant Job Assistance Execution Path while conducting our job
            guarantee training programs and job assistance training programs. We
            are proud to say that we prepare candidates who can perform better
            throughout their professional journey and will always remains
            unbeatable.
          </Paragraph>
        </Div>
      </Div>
      <Div divClass="row mt-5">
        <Div
          divClass={`${handleRow} col-sm-12 col-md-12 col-lg-12 gap-1 justify-content-center`}
        >
          <Div divClass="col-sm-12 col-lg-2 bg-1 d-flex justify-content-center align-items-center text-white text-center text-white fw-bold p-3">
            Candidate Registration
          </Div>
          <Div divClass={`${handleRow} col-sm-12 col-md-12 col-lg-2 gap-1`}>
            <Div divClass={`col-sm-12 col-md-12 col-lg-12 bg-2 d-flex justify-content-center align-items-center text-white text-center p-3 fw-bold`}>
              Weekly Classes
            </Div>
            <Div divClass={`col-sm-12 col-md-12 col-lg-12 bg-2 d-flex justify-content-center align-items-center text-white text-center p-3 fw-bold`}>
              5-10 Interview Questions Per Class
            </Div>
            <Div divClass={`col-sm-12 col-md-12 col-lg-12 bg-2 d-flex justify-content-center align-items-center text-white text-center p-3 fw-bold`}>
              Home Assignments for Practice
            </Div>
            <Div divClass={`col-sm-12 col-md-12 col-lg-12 bg-2 d-flex justify-content-center align-items-center text-white text-center p-3 fw-bold`}>
              Interview Techniques
            </Div>
          </Div>
          <Div divClass={`${handleRow} col-sm-12 col-lg-2 gap-1`}>
            <Div divClass={`col-sm-12 col-md-12 col-lg-12 bg-3 d-flex justify-content-center align-items-center text-center fw-bold p-3`}>
              Presentations <br />
              (twice in a month)
            </Div>
            <Div divClass={`col-sm-12 col-md-12 col-lg-12 bg-3 d-flex justify-content-center align-items-center text-center fw-bold p-3`}>
              Mock Interviews (twice in a month)
            </Div>
          </Div>
          <Div divClass={`${handleRow} col-sm-12 col-lg-2 gap-1`}>
            <Div divClass={`col-sm-12 col-md-12 col-lg-12 bg-4 d-flex justify-content-center align-items-center text-center fw-bold p-3`}>
              Capstone Projects{" "}
              {
                handleRow ? <><br/><br/><br /></> : ""
              }
            </Div>
            <Div divClass={`col-sm-12 col-md-12 col-lg-12 bg-4 d-flex justify-content-center align-items-center text-center fw-bold p-3`}>
              Live Projects <br />
              (on basis of experience)
            </Div>
          </Div>
          <Div divClass={`${handleRow} col-sm-12 col-lg-2 gap-1`}>
            <Div divClass={`col-sm-12 col-md-12 col-lg-12 bg-5 d-flex justify-content-center align-items-center text-white text-center fw-bold p-3`}>
              Video Resume
            </Div>
            <Div divClass={`col-sm-12 col-md-12 col-lg-12 bg-5 d-flex justify-content-center align-items-center text-white text-center fw-bold p-3`}>
              Portfolio <br />
            </Div>
            <Div divClass={`col-sm-12 col-md-12 col-lg-12 bg-5 d-flex justify-content-center align-items-center text-white text-center fw-bold p-3`}>
              Corporate Connections
            </Div>
            <Div divClass={`col-sm-12 col-md-12 col-lg-12 bg-5 d-flex justify-content-center align-items-center text-white text-center fw-bold p-3`}>
              Job Leads & Support
            </Div>
          </Div>
          <Div divClass={`col-sm-12 col-lg-2 bg-6 d-flex justify-content-center align-items-center text-white text-center fw-bold p-3`}>
            Get Hired
          </Div>
        </Div>
      </Div>
    </Div>
  );
});
