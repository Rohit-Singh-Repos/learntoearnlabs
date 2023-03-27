import React from 'react'
import { CommonCard, Div, Paragraph, SubHeading } from "components"

export const WorkingExperience = React.memo(() => {
  return (
    <Div divClass='container mb-5 mt-5'>
      <Div divClass='row'>
        <SubHeading subheadingClass="fw-bold text-primary">Get working experience & job</SubHeading>
        <SubHeading subheadingClass="fw-bold">Job Guarantee Courses</SubHeading>
      </Div>
        <Div divClass='row mt-5'>
            <Div divClass="col-lg-4 col-md-6 col-sm-12"></Div>
            <Div divClass="col-lg-8 col-md-6 col-sm-12">
                <CommonCard cardClass="card pt-2 pb-2 ps-4">
                    <Paragraph paragraphClass="fw-bold fs-5">FullStack Software Engineer</Paragraph>
                    <Paragraph paragraphClass="fs-6">Duration : 1 Year / 600+ Hours</Paragraph>
                    <Paragraph paragraphClass="fs-6">Average Salary : 8 Lacs+ Per Annum</Paragraph>
                    <Paragraph paragraphClass="fs-6">Qualification : Technical / Science Graduates</Paragraph>
                    <Paragraph paragraphClass="fs-6">Working Experience : 6 Months</Paragraph>
                </CommonCard>
                <CommonCard cardClass="card pt-2 pb-2 ps-4 mt-5">
                    <Paragraph paragraphClass="fw-bold fs-5">Professional Digital Marketer</Paragraph>
                    <Paragraph paragraphClass="fs-6">Duration : 6 Months / 1 Year</Paragraph>
                    <Paragraph paragraphClass="fs-6">Average Salary : 4-5 Lacs Per Annum</Paragraph>
                    <Paragraph paragraphClass="fs-6">Qualification : Any Graduate</Paragraph>
                    <Paragraph paragraphClass="fs-6">Working Experience : 3/6 Months</Paragraph>
                </CommonCard>
            </Div>
        </Div>
        <Div divClass='row'>
            <Div divClass="col-lg-4 col-md-6 col-sm-12"></Div>
            <Div divClass="col-lg-8 col-md-6 col-sm-12"></Div>
        </Div>
    </Div>
  )
})
