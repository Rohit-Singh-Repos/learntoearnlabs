import React from 'react'
import ReactDOM from "react-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const loaderContainer = document.getElementById("loader");

const Loader = ({modalHandler}) => {
    return (
      <div className="modal" style={{display:"block"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => modalHandler(false)}
              />
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => modalHandler(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export const LoaderComponent = ({modalHandler}) => {
  return ReactDOM.createPortal(<Loader modalHandler={modalHandler}/>,loaderContainer)
}