import React,{useCallback, useState} from 'react'
import { CommonCard, Div, SelectInput, SubHeading, TextInput, Button, TextAreaInput, Alert } from 'components'
import axios from 'axios'

export const ContactFormAreaComponent = React.memo(({inputSchemas}) => {
    const [showAlertDanger, setShowAlertDanger] = useState(false);
    const [showAlertDanger2, setShowAlertDanger2] = useState(false);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertNetwork, setShowAlertNetwork] = useState(false);
    const [inputVal, setInputVal] = useState({
      studentName:"",
      studentEmail:"",
      studentMobile:"",
      studentMessage:"",
      studentProfession:""
    })
    const { textInput, selectInputOptions } = inputSchemas;
    const handleInput = useCallback((e) => {
      const { name, value } = e.target;
      setInputVal({
        ...inputVal,
        [name]:value
      })
    },[
      inputVal.studentName,
      inputVal.studentEmail,
      inputVal.studentMobile,
      inputVal.studentMessage,
      inputVal.studentProfession
    ])
    const submitContactInfo = async() => {
      const { studentName, studentEmail, studentMobile, studentMessage, studentProfession } = inputVal
      if(studentName && studentEmail && studentMobile && studentMessage && studentProfession){
        const emailRegExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        if(studentEmail.match(emailRegExp)){
          try {
            const response = await axios(`${process.env.REACT_APP_API_BASE_URL}/api/contacts/`,{
              method:"POST",
              data:{
                name:studentName,
                profession:studentProfession,
                email:studentEmail,
                number:studentMobile,
                msgbody:studentMessage,
                datetime:new Date().toLocaleString(),
              },
            })
            setShowAlertDanger(false);
            setShowAlertNetwork(false);
            setShowAlertDanger2(false)
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
            setShowAlertDanger2(false)
          }
        }else{
          setShowAlertDanger2(true)
          setShowAlertSuccess(false);
          setShowAlertDanger(false);
          setShowAlertNetwork(false)
        }
      }else{
        setShowAlertDanger(true);
        setShowAlertSuccess(false);
        setShowAlertNetwork(false)
        setShowAlertDanger2(false)
      }
    }
    return (
      <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <CommonCard cardClass="card rounded-0 col-sm-12 col-md-12 col-lg-12 h-100">
              <SubHeading subheadingClass="text-center fw-bold mb-5">
                Submit your query
              </SubHeading>
              {showAlertDanger && <Alert alertMessage="All fields are required" alertType="alert-danger fw-bold" setShowAlert={setShowAlertDanger}/>}
              {showAlertDanger2 && <Alert alertMessage="Enter valid email address" alertType="alert-danger fw-bold" setShowAlert={setShowAlertDanger2}/>}
              {showAlertSuccess && <Alert alertMessage="Query Successfully Submitted" alertType="alert-success fw-bold" setShowAlert={setShowAlertSuccess}/>}
              {showAlertNetwork && <Alert alertMessage="Something Went Wrong" alertType="alert-danger fw-bold" setShowAlert={setShowAlertNetwork}/>}
              {textInput && textInput.length !== 0 ? (
                textInput.map((item,index) => {
                  if(item?.textInputName !== "courseName"){
                    return <TextInput
                      textInputClass="form-control mb-3 rounded-0 outline-0"
                      key={item.id}
                      textInputType={item.textInputType}
                      textInputPlaceholder={item.textInputPlaceholder}
                      textInputName={item.textInputName}
                      textInputValue={Object.values(inputVal)[index]}
                      textInputHandler={handleInput}
                  />
                  }else{
                    return <TextAreaInput
                      textInputClass="form-control mb-3 rounded-0 outline-0 textarea-resize"
                      key={index+"textarea"}
                      textInputPlaceholder="Enter message ..."
                      textInputName="studentMessage"
                      textInputValue={inputVal.studentMessage}
                      textInputHandler={handleInput}
                    />
                  }
                })
              ) : (
                <></>
              )}
              <SelectInput
                selectInputName="studentProfession"
                selectInputData={selectInputOptions}
                selectInputClass="form-select rounded-0"
                selectInputValue={inputVal.studentProfession}
                selectInputHandler={handleInput}
              />
                <Div divClass="d-grid mt-5">
                    <Button buttonClass="btn btn-primary rounded-0" buttonHandler={submitContactInfo}>Submit</Button>
                </Div>
            </CommonCard>
      </Div>
    )
  })
