import React,{useState} from 'react'
import { Div, Heading, TextInput, Image, Span, Button, Alert, Paragraph, LinkComponent } from "components";
import axios from 'axios';
import { MISCELLANEOUS_IMAGES } from 'assets/images';

export const CertificateVerification = React.memo(({mobileDetector,setShowCertificateInfo,setCertificateInfoData}) => {
    const [textInputVal, setTextInputVal] = useState("");
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [showAlertDanger2, setShowAlertDanger2] = useState(false);
    const [showAlertNetwork, setShowAlertNetwork] = useState(false);
    const verifyCertificateHandler = async() => {
      if(textInputVal){
        try {
          const response = await axios(`${process.env.REACT_APP_API_BASE_URL}/api/certificates?certificateCode=${textInputVal}`)
          if(response.status === 200 && response?.data && response?.data.length !== 0) {
            setShowCertificateInfo(true)
            setCertificateInfoData(response?.data)
            setShowAlertDanger(false)
            setShowAlertNetwork(false)
            setShowAlertDanger2(false)
          }else{
            setShowCertificateInfo(false)
            setCertificateInfoData(null)
            setShowAlertDanger(false)
            setShowAlertNetwork(false)
            setShowAlertDanger2(true)
          }
        } catch (error) {
          setShowAlertNetwork(true)
          setShowAlertDanger(false)
          setShowAlertDanger2(false)
        }
      }else{
        setShowAlertDanger(true)
        setShowAlertNetwork(false)
        setShowAlertDanger2(false)
      }
    }

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
            {showAlertDanger && <Alert alertMessage="Enter Valid Verification Code" alertType="alert-danger fw-bold" setShowAlert={setShowAlertDanger}/>}
            {showAlertDanger2 && <Alert alertMessage="Invalid Certificate Code" alertType="alert-danger fw-bold" setShowAlert={setShowAlertDanger2}/>}
            {showAlertNetwork && <Alert alertMessage="Something Went Wrong" alertType="alert-danger fw-bold" setShowAlert={setShowAlertNetwork}/>}
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
            <Paragraph paragraphClass="fs-12 mt-4 ">NOTE: You can only verify those certificates, issued since January 2023. For certificates issued before January 2023 enquire at <a href='mailto:team@learntoearnlabs.com'><Span spanClass="text-primary fw-bold">team@learntoearnlabs.com</Span></a></Paragraph>
          </Div>
        </>
    );
})