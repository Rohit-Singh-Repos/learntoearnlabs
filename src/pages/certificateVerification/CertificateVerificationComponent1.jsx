import React,{useCallback,useState} from 'react'
import { Div, Heading, TextInput, Image, Span, Button } from "components";
import axios from 'axios';
import { MISCELLANEOUS_IMAGES } from 'assets/images';

export const CertificateVerification = React.memo(({mobileDetector}) => {
    const [textInputVal, setTextInputVal] = useState("")
    const verifyCertificateHandler = useCallback(async() => {
      if(textInputVal){
        try {
          const response = await axios(`${process.env.REACT_APP_API_BASE_URL}/api/certificates/`)
        } catch (error) {
          
        }
      }else{

      }
    },[])

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
            <Heading headingClass="fw-bold mb-4">
              <Span spanClass="text-primary">Verify the </Span>
              <Span>Certificate</Span>
            </Heading>
            <TextInput
                textInputClass="form-control rounded-0 mb-3"
                textInputType="text"
                textInputName="verificationCode"
                textInputPlaceholder="Enter Certificate Code"
                textInputValue={textInputVal}
                textInputHandler={(e) => setTextInputVal(e.target.value)}
            />
            <Div divClass={mobileDetector ? "d-grid gap-2 col-6 mx-auto" : ""}>
              <Button buttonClass="btn btn-primary rounded-0" buttonHandler={verifyCertificateHandler}>Submit</Button>
            </Div>
          </Div>
        </>
    );
})