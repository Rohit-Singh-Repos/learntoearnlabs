import React from 'react'
import { Div, Image, Heading, SubHeading, Paragraph, Button, CommonCard } from 'components'

export const CoursesPage = React.memo(() => {
    return (
      <Div divClass='container mb-5'>
        <Div divClass="row">
          <Div divClass="col-sm-12 col-md-6 col-lg-7"></Div>
          <Div divClass="col-sm-12 col-md-6 col-lg-5">
            <Heading headingClass="text-primary fw-bold">Cloud Computing & DevOps Training Program</Heading>
            <Button buttonClass="btn btn-primary rounded-0 border-0 me-4 mt-3">Apply Now</Button>
            <Button buttonClass="btn btn-outline-primary rounded-0 mt-3">Download Syllabus</Button>
          </Div>
          <Div divClass="text-bg-primary border-light mt-5 d-lg-flex">
            <CommonCard cardClass="card bg-transparent border-0">
              <SubHeading subheadingClass="text-center fw-bold">8</SubHeading>
              <Paragraph paragraphClass="text-center fw-bold">Training Modules</Paragraph>
            </CommonCard>
            <CommonCard cardClass="card bg-transparent border-0">
              <SubHeading subheadingClass="text-center fw-bold">8</SubHeading>
              <Paragraph paragraphClass="text-center fw-bold">Training Modules</Paragraph>
            </CommonCard>
            <CommonCard cardClass="card bg-transparent border-0">
              <SubHeading subheadingClass="text-center fw-bold">8</SubHeading>
              <Paragraph paragraphClass="text-center fw-bold">Training Modules</Paragraph>
            </CommonCard>
            <CommonCard cardClass="card bg-transparent border-0">
              <SubHeading subheadingClass="text-center fw-bold">8</SubHeading>
              <Paragraph paragraphClass="text-center fw-bold">Training Modules</Paragraph>
            </CommonCard>
          </Div>
        </Div>
      </Div>
    )
})