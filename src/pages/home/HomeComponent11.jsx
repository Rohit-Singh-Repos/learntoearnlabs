import React from 'react'
import { CommonCard, Div, Paragraph, SubHeading } from "components"

export const TrainingPerks = React.memo(() => {
  return (
    <Div divClass='container mb-5 mt-5'>
      <Div divClass='row'>
        <SubHeading subheadingClass="fw-bold text-primary">Our students are delighted with</SubHeading>
        <SubHeading subheadingClass="fw-bold">Training Perks & Benefits</SubHeading>
        <Paragraph paragraphClass="align-justify">We offers various training perks and benefits to our students to make them delighted and stay motivated for getting better results.
        </Paragraph>
      </Div>
        <Div divClass='row mt-5'>
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15 fw-bold">Hands-On Training</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15 fw-bold">In-House / Online Classes</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15 fw-bold">Live Classes Recording for Revision</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15 fw-bold">Professional Development</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15 fw-bold">Work Incentives / Stipend</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15 fw-bold">Working Experience</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15 fw-bold">Learning References</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-3 col-md-6 col-sm-12">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15 fw-bold">Software Support</Paragraph>
                </CommonCard>
            </Div>    
        </Div>
        <Div divClass='row mt-5'>
            <Div divClass="col-lg-12 col-md-12 col-sm-12">
                <Paragraph paragraphClass="align-justify text-primary">In respect of fee submission, the candidate gets benefitted with 25% cashback offers with some work incentives.
                </Paragraph>
            </Div>
        </Div>
    </Div>
  )
})
