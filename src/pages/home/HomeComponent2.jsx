import React from 'react'
import { CommonCard, Div, Paragraph, Heading } from "components"

export const ProfessionalJourney = React.memo(() => {
  return (
    <Div divClass='container mb-5'>
      <Div divClass='row d-flex justify-content-around align-items-center'>
        <Div divClass="col-sm-12 col-md-12 col-lg-6">
            <Heading headingClass="text-primary fw-bold">Start Your</Heading>
            <Heading headingClass="fw-bold">Professional Journey</Heading>
            <Paragraph>
                With 12+ years of experience in transforming lives by enabling and empowering learners with skills that matter.
            </Paragraph>
        </Div>
        <Div divClass="row col-sm-12 col-md-12 col-lg-6">
            <CommonCard cardClass="card text-bg-primary col-lg-6 col-sm-12 col-md-6 rounded-0 border border-5 border-light">
                <Div divClass="card-body">
                    <Paragraph paragraphClass="card-text">Industry-Oriented Training Programs</Paragraph>
                </Div>
            </CommonCard>
            <CommonCard cardClass="card text-bg-primary col-lg-6 col-sm-12 col-md-6 rounded-0 border border-5 border-light">
                <Div divClass="card-body">
                    <Paragraph paragraphClass="card-text">Skill Development Training Programs</Paragraph>
                </Div>
            </CommonCard>
            <CommonCard cardClass="card text-bg-primary col-lg-6 col-sm-12 col-md-6 rounded-0 border border-5 border-light">
                <Div divClass="card-body">
                    <Paragraph paragraphClass="card-text">Internship Opportunities</Paragraph>
                </Div>
            </CommonCard>
            <CommonCard cardClass="card text-bg-primary col-lg-6 col-sm-12 col-md-6 rounded-0 border border-5 border-light">
                <Div divClass="card-body">
                    <Paragraph paragraphClass="card-text">Career Counselling & Job Consultation</Paragraph>
                </Div>
            </CommonCard>
        </Div>
      </Div>
    </Div>
  )
})
