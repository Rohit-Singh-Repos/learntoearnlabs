import React from 'react'
import { CommonCard, Div, Paragraph, Heading } from "components"

export const ProfessionalJourney = React.memo(() => {
  return (
    <Div divClass='container mb-5 mt-5 pt-5 pb-5'>
      <Div divClass='row d-flex justify-content-around align-items-center'>
        <Div divClass="col-sm-12 col-md-12 col-lg-6">
            <Heading headingClass="text-primary fw-bold">Start Your</Heading>
            <Heading headingClass="fw-bold">Professional Journey</Heading>
            <Paragraph paragraphClass="align-justify-sm">
                With 12+ years of experience in transforming lives by enabling and empowering learners with skills that matter.
            </Paragraph>
        </Div>
        <Div divClass="row col-sm-12 col-md-12 col-lg-6">
            <CommonCard verticalAlign={true} cardClass="card text-bg-primary col-lg-6 col-sm-12 col-md-6 rounded-0 border border-5 border-light">
                
                    <Paragraph paragraphClass="card-text fw-bold text-center">Industry-Oriented Training Programs</Paragraph>
          
            </CommonCard>
            <CommonCard verticalAlign={true} cardClass="card text-bg-primary col-lg-6 col-sm-12 col-md-6 rounded-0 border border-5 border-light">
                
                    <Paragraph paragraphClass="card-text fw-bold text-center">Skill Development Training Programs</Paragraph>
             
            </CommonCard>
            <CommonCard verticalAlign={true} cardClass="card text-bg-primary col-lg-6 col-sm-12 col-md-6 rounded-0 border border-5 border-light d-flex">
                
                    <Paragraph paragraphClass="card-text fw-bold text-center">Internship Opportunities</Paragraph>
            
            </CommonCard>
            <CommonCard verticalAlign={true} cardClass="card text-bg-primary col-lg-6 col-sm-12 col-md-6 rounded-0 border border-5 border-light">
               
                    <Paragraph paragraphClass="card-text fw-bold text-center">Career Counselling & Job Consultation</Paragraph>
          
            </CommonCard>
        </Div>
      </Div>
    </Div>
  )
})
