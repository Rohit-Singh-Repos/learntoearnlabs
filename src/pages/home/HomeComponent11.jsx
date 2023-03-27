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
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15">Hands-On Training</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15">In-House / Online Classes</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15">Live Classes Recording for Revision</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15">Professional Development</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15">Work Incentives / Stipend</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15">Working Experience</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15">Learning References</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-3 col-md-6 col-sm-12">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2 text-15">Software Support</Paragraph>
                </CommonCard>
            </Div>    
        </Div>
    </Div>
  )
})
