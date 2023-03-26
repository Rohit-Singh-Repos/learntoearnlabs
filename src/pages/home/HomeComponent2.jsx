import React from 'react'
import { Card, Div, Paragraph, Button } from "components"

export const ProfessionalJourney = React.memo(() => {
  return (
    <Div divClass='container-fluid'>
      <Div divClass='row align-items-center p-3'>
        <Div divClass='col-sm-12 col-md-7 col-lg-8'>HomePage</Div>
        <Div divClass='col-sm-12 col-md-5 col-lg-4'>
          <Paragraph>
            When no one understand your talent, then we believe that you have the capabilities to do miracles…
          </Paragraph>
          <Button buttonClass="btn btn-primary">
            Join Now
          </Button>
        </Div>
        <Div divClass="text-bg-primary border-light mt-5 d-lg-flex p-3">
          <Card cardText="300+" cardText2="Corporate Tie-Ups" borderShow={true}/>
          <Card cardText="1200+" cardText2="Alumni" borderShow={true}/>
          <Card cardText="50+" cardText2="Training Programs" borderShow={true}/>
          <Card cardText="3-8 LPA" cardText2="Job Gurantee" borderShow={false}/>
        </Div>
      </Div>
    </Div>
  )
})
