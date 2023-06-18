import React from 'react'
import { Div, Image, Heading, Span, Button, UnorderedList, ListItem } from 'components'
import { MISCELLANEOUS_IMAGES } from 'assets/images';

export const CertificateInformation = React.memo(({mobileDetector,certificateInfoData}) => {
    return (
      <>
          <Div divClass="col-sm-12 col-md-7 col-lg-6">
            <Image
             width="1200"
             height="800"
             imagePath={MISCELLANEOUS_IMAGES.verifyCertificate}
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
                    <Span spanClass="badge bg-primary rounded-pill">{certificateInfoData && certificateInfoData[0]?.certificateCode}</Span>
                </ListItem>
                <ListItem listItemClass="list-group-item d-flex justify-content-between align-items-center">
                    Candidate Name
                    <Span spanClass="badge bg-primary rounded-pill">{certificateInfoData && certificateInfoData[0]?.candidateName}</Span>
                </ListItem>
                <ListItem listItemClass="list-group-item d-flex justify-content-between align-items-center">
                    Enrollment Number
                    <Span spanClass="badge bg-primary rounded-pill">{certificateInfoData && certificateInfoData[0]?.enrollmentNo}</Span>
                </ListItem>
                <ListItem listItemClass="list-group-item d-flex justify-content-between align-items-center">
                    Title
                    <Span spanClass="badge bg-primary rounded-pill">{certificateInfoData && certificateInfoData[0]?.title}</Span>
                </ListItem>
                <ListItem listItemClass="list-group-item d-flex justify-content-between align-items-center">
                    Completion Date
                    <Span spanClass="badge bg-primary rounded-pill">{certificateInfoData && certificateInfoData[0]?.completionDate}</Span>
                </ListItem>
                <ListItem listItemClass="list-group-item d-flex justify-content-between align-items-center rounded-0">
                    Duration
                    <Span spanClass="badge bg-primary rounded-pill">{certificateInfoData && certificateInfoData[0]?.duration}</Span>
                </ListItem>
            </UnorderedList>
            <Div divClass={mobileDetector ? "d-grid gap-2 col-6 mx-auto" : ""}>
              <Button buttonClass="btn btn-primary rounded-0">Verify Another Certificate</Button>
            </Div>
          </Div>
        </>
    );
})