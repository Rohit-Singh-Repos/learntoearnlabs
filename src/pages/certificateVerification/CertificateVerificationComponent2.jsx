import React from 'react'
import { Div, Image, Heading, Span, Button, UnorderedList, ListItem } from 'components'

export const CertificateInformation = React.memo(({mobileDetector}) => {
    return (
      <Div divClass="container mt-5 pt-4">
        <Div divClass="row align-items-center">
          <Div divClass="col-sm-12 col-md-7 col-lg-6">
            <Image
              width="1200"
              height="800"
              // imagePath={coverImage ? coverImage : imagePath}
              imageClass="img-fluid"
              imageAltText="learn2earnlabs-home-cover"
            />
          </Div>
          <Div divClass="col-sm-12 col-md-7 col-lg-6">
            <Heading headingClass="fw-bold mb-5">
              <Span spanClass="text-primary">Certificate </Span>
              <Span>Verified</Span>
            </Heading>
            <UnorderedList unorderedListClass="list-group mb-3 ">
                <ListItem listItemClass="list-group-item d-flex justify-content-between align-items-center rounded-0">
                    Certificate Code
                    <Span spanClass="badge bg-primary rounded-pill">14</Span>
                </ListItem>
                <ListItem listItemClass="list-group-item d-flex justify-content-between align-items-center">
                    Completion Date
                    <Span spanClass="badge bg-primary rounded-pill">14</Span>
                </ListItem>
                <ListItem listItemClass="list-group-item d-flex justify-content-between align-items-center">
                    Enrollment Number
                    <Span spanClass="badge bg-primary rounded-pill">14</Span>
                </ListItem>
                <ListItem listItemClass="list-group-item d-flex justify-content-between align-items-center">
                    Candidate Name
                    <Span spanClass="badge bg-primary rounded-pill">14</Span>
                </ListItem>
                <ListItem listItemClass="list-group-item d-flex justify-content-between align-items-center">
                    Title
                    <Span spanClass="badge bg-primary rounded-pill">14</Span>
                </ListItem>
                <ListItem listItemClass="list-group-item d-flex justify-content-between align-items-center rounded-0">
                    Duration
                    <Span spanClass="badge bg-primary rounded-pill">14</Span>
                </ListItem>
            </UnorderedList>
            <Div divClass={mobileDetector ? "d-grid gap-2 col-6 mx-auto" : ""}>
              <Button buttonClass="btn btn-primary rounded-0">Submit</Button>
            </Div>
          </Div>
        </Div>
      </Div>
    );
})