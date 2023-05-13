import React, { useState } from "react";
import { ModalComponent } from "./Popups";
import { Div } from "./Div";
import { TextInput } from "./FormInput";

export const Button = React.memo(
  ({ buttonClass, children, buttonHandler, ...props }) => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const scrollToDown = () => {
      const targetElement = document.getElementById("applyNow")
      targetElement?.scrollIntoView({behavior: 'smooth'})
    }
    return (
      <>
        {showModal && (
          <ModalComponent detector={props.detector} coursedetector={props.coursedetector} modalHandler={setShowModal} emailData={email}>
            <Div divClass="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <TextInput
                textInputType="email"
                textInputClass="form-control rounded-0"
                textInputPlaceholder="Enter Email ..."
                textInputValue={email}
                textInputHandler={(e) => setEmail(e.target.value)}
                id="exampleFormControlInput1"
              />
            </Div>
          </ModalComponent>
        )}
        <button
          className={buttonClass}
          onClick={
            children === "Download Syllabus"
              ? () => setShowModal(true)
              : children === "Apply Now" 
              ? () => scrollToDown()
              : buttonHandler
          }
          {...props}
        >
          {children}
        </button>
      </>
    );
  }
);
