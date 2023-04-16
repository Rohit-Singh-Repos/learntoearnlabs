import React from 'react'
import { Div, Heading, TextInput, Image, Span, Button } from "components";

export const CertificateVerification = React.memo(({mobileDetector}) => {
    return (
      <>
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
            <Heading headingClass="fw-bold mb-4">
              <Span spanClass="text-primary">Verify the </Span>
              <Span>Certificate</Span>
            </Heading>
            <TextInput
                textInputClass="form-control rounded-0 mb-3"
                textInputType="text"
                textInputName="verificationCode"
                textInputPlaceholder="Enter Certificate Code"
            />
            <Div divClass={mobileDetector ? "d-grid gap-2 col-6 mx-auto" : ""}>
              <Button buttonClass="btn btn-primary rounded-0">Submit</Button>
            </Div>
          </Div>
        </>
    );
})