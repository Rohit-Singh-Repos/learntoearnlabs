import React from "react";
import { Div, Paragraph, SubHeading, Span } from "components";

export const JobAssistance = React.memo(() => {
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
            In present scenario providing job surety is easy, only we need to focus on outcome based learning and practical work enhancement. We know that every candidate is enough capable to understand the concepts and implement those concepts for improving his/her practical knowledge and experience. 
            Hence we are following a dynamic & vibrant Job Assistance Execution Path while conducting our job guarantee training programs and job assistance training programs. We are proud to say that we prepare candidates who can perform better throughout their professional journey and will always remains unbeatable.
            </Paragraph>
        </Div>
      </Div>
      <Div divClass="row mt-5">
        <Div divClass="row col-sm-12 col-md-12 col-lg-12">
          <Div divClass="col-sm-12 col-lg-2 bg-1 border border-5 border-light">
              Candidate Registration
          </Div>
          <Div divClass="row col-sm-12 col-lg-2">
              <Div divClass="col-sm-12 col-md-12 col-lg-12 bg-2 border border-5 border-light p-5">Weekly Classes</Div>
              <Div divClass="col-sm-12 col-md-12 col-lg-12 bg-2 border border-5 border-light p-5">5-10 Interview Questions Per Class</Div>
              <Div divClass="col-sm-12 col-md-12 col-lg-12 bg-2 border border-5 border-light p-5">Home Assignments for Practice</Div>
              <Div divClass="col-sm-12 col-md-12 col-lg-12 bg-2 border border-5 border-light p-5">Interview Techniques</Div>
          </Div>
          <Div divClass="row col-sm-12 col-lg-2">
              <Div divClass="col-sm-12 col-md-12 col-lg-12 bg-3 border border-5 border-light">Presentations (twice in a month)</Div>
              <Div divClass="col-sm-12 col-md-12 col-lg-12 bg-3 border border-5 border-light">Mock Interviews (twice in a month)</Div>
          </Div>
          <Div divClass="row col-sm-12 col-lg-2">
              <Div divClass="col-sm-12 col-md-12 col-lg-12 bg-4 border border-5 border-light">Capstone Projects</Div>
              <Div divClass="col-sm-12 col-md-12 col-lg-12 bg-4 border border-5 border-light">Live Projects (on basis of experience)</Div>
          </Div>
          <Div divClass="row col-sm-12 col-lg-2">
              <Div divClass="col-sm-12 col-md-12 col-lg-12 bg-5 border border-5 border-light">Video Resume</Div>
              <Div divClass="col-sm-12 col-md-12 col-lg-12 bg-5 border border-5 border-light">Portfolio</Div>
              <Div divClass="col-sm-12 col-md-12 col-lg-12 bg-5 border border-5 border-light">Corporate Connections</Div>
              <Div divClass="col-sm-12 col-md-12 col-lg-12 bg-5 border border-5 border-light">Job Leads & Support</Div>
          </Div>
          <Div divClass="col-sm-12 col-lg-2 bg-6 border border-5 border-light">Get Hired</Div>
        </Div>
      </Div>
    </Div>
  );
});
