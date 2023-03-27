import React from 'react'
import { CommonCard, Div, Paragraph, SubHeading } from "components"

export const JoinComponent = React.memo(() => {
  return (
    <Div divClass='container mb-5 mt-5'>
      <Div divClass='row'>
        <SubHeading subheadingClass="fw-bold text-primary">Why you should join</SubHeading>
        <SubHeading subheadingClass="fw-bold">Learn2Earn Labs</SubHeading>
        <Paragraph paragraphClass="align-justify">We believe that education is a lifelong pursuit, and we are here to support you at every step of the learning journey, dedicatedly.
        </Paragraph>
        <Paragraph paragraphClass="align-justify">We are on a mission to help people learn, grow and achieve more in life.
        </Paragraph>
      </Div>
        <Div divClass='row mt-5'>
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2">Practical Based Live <br /> Training Sessions</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2">Online Live Classes for <br /> Remote Learners</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-3 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2">Live Projects & Working <br /> Experience</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-3 col-md-6 col-sm-12">
                <CommonCard cardClass="card bg-primary d-flex align-items-center border-0 rounded-0">
                    <Paragraph paragraphClass="text-light text-center pt-2 mb-2">Career Assistance & <br /> Corporate Networking</Paragraph>
                </CommonCard>
            </Div>    
        </Div>
    </Div>
  )
})
