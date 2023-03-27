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
      </Div>
    </Div>
  );
});
