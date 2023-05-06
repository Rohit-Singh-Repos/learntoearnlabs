import React, { useState } from "react";
import { ModalComponent } from "./Popups";

export const Button = React.memo(
  ({ buttonClass, children, buttonHandler, ...props }) => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("")
    return (
      <>
        {showModal && (
          <ModalComponent modalHandler={setShowModal} emailData={email}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </ModalComponent>
        )}
        <button
          className={buttonClass}
          onClick={
            children === "Download Syllabus"
              ? () => setShowModal(true)
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
