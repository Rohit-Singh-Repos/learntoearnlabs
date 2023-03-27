import React from 'react'
import { CommonCard, Div, Paragraph, SubHeading } from "components"

export const TrainingPrograms = React.memo(() => {
  return (
    <Div divClass='container mb-5 mt-5'>
      <Div divClass='row'>
        <SubHeading subheadingClass="fw-bold text-primary">Offering a perfect bunch of</SubHeading>
        <SubHeading subheadingClass="fw-bold">Top-Edge Training Programs</SubHeading>
      </Div>
        <Div divClass='row mt-5'>
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2">Java FullStack</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2">Data Science & Machine Learning</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2">FullStack Web Development</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2">Cloud Computing & Devops</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2">Train The Trainer</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2">Design Thinking & UI/UX</Paragraph>
                </CommonCard>
            </Div>    
        </Div>
    </Div>
  )
})
