import React, { useEffect, useState, useCallback } from "react";
import { Div, Heading, TextInput, Image, Span, Button, Alert } from "components";
import { cashbackInputSchema } from "schemas";
import { MISCELLANEOUS_IMAGES } from "assets/images";
import axios from 'axios';
import { useHookstate } from "@hookstate/core"
import { PAGE_STATE, MOBILE_DETECTOR } from "globalStore/globalState";


export const CashbackComponent = React.memo(() => {
  const [mobile, setMobile] = useState(false);
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertNetwork, setShowAlertNetwork] = useState(false);
  const [inputVal, setInputVal] = useState({
    receiptNumber:"",
    enrollmentNumber:"",
    accountNumber:"",
    ifscCode:"",
  })
  const { pageVisiblity } = useHookstate(PAGE_STATE)
  const { mobileDetector } = useHookstate(MOBILE_DETECTOR)
  const handleInput = useCallback((e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]:value
    })
  },[
    inputVal.receiptNumber,
    inputVal.enrollmentNumber,
    inputVal.accountNumber,
    inputVal.ifscCode
  ])
  const submitCashbackInfo = async() => {
    const { receiptNumber, enrollmentNumber, accountNumber, ifscCode } = inputVal
    if(receiptNumber && enrollmentNumber && accountNumber && ifscCode){
      try {
        const response = await axios(`${process.env.REACT_APP_API_BASE_URL}/api/cashbacks/`,{
          method:"POST",
          data:{
            receiptNo:receiptNumber,
            enrollmentNo:enrollmentNumber,
            accountNo:accountNumber,
            ifscCode:ifscCode,
            datetime:new Date().toLocaleString(),
          },
        })
        setShowAlertDanger(false);
        setShowAlertNetwork(false);
        if(response.status === 200){
          setShowAlertSuccess(true);
          setInputVal({
            studentName:"",
            studentEmail:"",
            studentMobile:"",
            studentMessage:"",
            studentProfession:""
          })
        }
      } catch (error) {
        setShowAlertNetwork(true)
        setShowAlertSuccess(false);
        setShowAlertDanger(false);
      }
    }else{
      setShowAlertDanger(true);
      setShowAlertSuccess(false);
      setShowAlertNetwork(false)
    }
  }
  const { textInput } = cashbackInputSchema;
  const handleResize = () => {
    if (mobileDetector.get()) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    pageVisiblity.set(false)
  },[])

  useEffect(() => {
    handleResize()
  },[]);
  
  return (
    <Div divClass="container mt-5 pt-4">
      <Div divClass="row align-items-center">
        <Div divClass="col-sm-12 col-md-7 col-lg-6">
          <Image
            width="400"
            height="300"
            imagePath={MISCELLANEOUS_IMAGES.cashbackImage}
            imageClass="img-fluid"
            imageAltText="learn2earnlabs-home-cover"
          />
        </Div>
        <Div divClass="col-sm-12 col-md-7 col-lg-6">
          <Heading headingClass="fw-bold mb-5">
            <Span spanClass="text-primary">Claim for </Span>
            <Span>Cashback</Span>
          </Heading>
          {showAlertDanger && <Alert alertMessage="All fields are required" alertType="alert-danger fw-bold" setShowAlert={setShowAlertDanger}/>}
          {showAlertSuccess && <Alert alertMessage="Details Successfully Submitted" alertType="alert-success fw-bold" setShowAlert={setShowAlertSuccess}/>}
          {showAlertNetwork && <Alert alertMessage="Something Went Wrong" alertType="alert-danger fw-bold" setShowAlert={setShowAlertNetwork}/>}
          {textInput && textInput.length !== 0 ? (
            textInput.map((item,index) => (
              <TextInput
                key={item.id}
                textInputClass="form-control mb-3 rounded-0"
                textInputType={item.textInputType}
                textInputPlaceholder={item.textInputPlaceholder}
                textInputName={item.textInputName}
                textInputValue={Object.values(inputVal)[index]}
                textInputHandler={handleInput}
              />
            ))
          ) : (
            <></>
          )}
          <Div divClass={mobile ? "d-grid gap-2 col-6 mx-auto" : ""}>
            <Button buttonClass="btn btn-primary rounded-0" buttonHandler={submitCashbackInfo}>Submit</Button>
          </Div>
        </Div>
      </Div>
    </Div>
  );
});
