import React from 'react'
import ReactDOM from "react-dom";
import Lottie from "lottie-react";
import Loader from "assets/loader/loader.json"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const loaderContainer = document.getElementById("loader");

export const FallbackLoader = React.memo(() => {
    return (
      <div className="modal" style={{display:"block"}}>
        <Lottie animationData={Loader} loop={true} />
      </div>
    );
})

export const LoaderComponent = React.memo(() => {
    return ReactDOM.createPortal(<FallbackLoader/>,loaderContainer)
})
