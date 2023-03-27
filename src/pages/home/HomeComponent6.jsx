import React from 'react'
import { CommonCard, Div, Paragraph, SubHeading } from "components"

export const ShortTermCourses = React.memo(() => {
  return (
    <Div divClass='container mb-5 mt-5'>
      <Div divClass='row'>
        <SubHeading subheadingClass="fw-bold text-primary">Prepare yourself for interviews</SubHeading>
        <SubHeading subheadingClass="fw-bold">Short Term Courses</SubHeading>
      </Div>
        <Div divClass='row mt-5'>
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">C / C++ / Data Structure</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">Java Programming</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">Python Programming</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">MySQL Database</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">Linux & AWS</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">HTML/CSS/JavaScript</Paragraph>
                </CommonCard>
            </Div>    
        </Div>
    </Div>
  )
})
