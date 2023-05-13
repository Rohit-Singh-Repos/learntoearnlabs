import React from 'react'
import ReactDOM from "react-dom";
import { Div } from './Div';
import { Button } from './Button';
import { SubHeading } from './Text';
import axios from 'axios';
import File from "../assets/syllabus/Affiliate Marketing.pdf"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Anchor } from './Anchor';

const modalContainer = document.getElementById("popup")

const ModalUI = React.memo(({modalHandler,children,emailData,coursedetector,detector}) => {
  
  const download = async (filename, url) => {
    try {
      let response = await axios(`${process.env.REACT_APP_API_BASE_URL}/api/syllabuses`,{
        method:"POST",
        data:{
          email:emailData,
          specialization:detector ? coursedetector + " " + detector : coursedetector,
          datetime:new Date().toLocaleString(),
        },
      })

      if(response && response.status === 200){
        document.getElementById("download_btn").click();
        modalHandler(false)
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Div divClass="modal modal-bg rounded-0">
      <Div divClass="modal-dialog modal-dialog-centered ">
        <Div divClass="modal-content rounded-0">
          <Div divClass="modal-header">
            <SubHeading subheadingClass="modal-title">Enter your email to continue</SubHeading>
            <Button
              type="button"
              buttonClass="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              buttonHandler={() => modalHandler(false)}
            />
          </Div>
          <Div divClass="modal-body">
            {children}
          </Div>
          <Div divClass="modal-footer">
            <Button
              type="button"
              buttonClass="btn btn-primary rounded-0"
              data-bs-dismiss="modal"
              buttonHandler={download}
            >
              Download
            </Button>
            <Anchor
              href={File}
              download={coursedetector}
              style={{ display: "none" }}
              id="download_btn"
            >
              Download
          </Anchor>
          </Div>
        </Div>
      </Div>
    </Div>
  );
})

export const ModalComponent = React.memo(({modalHandler,children,emailData,coursedetector,detector}) => {
  return ReactDOM.createPortal(<ModalUI detector={detector} modalHandler={modalHandler} emailData={emailData} coursedetector={coursedetector}>{children}</ModalUI>,modalContainer)
})