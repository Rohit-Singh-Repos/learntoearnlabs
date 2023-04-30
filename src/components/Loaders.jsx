import React from 'react'
import ReactDOM from "react-dom";
import Lottie from "lottie-react";
import Loader from "assets/loader/loader.json"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Div } from './Div';

const loaderContainer = document.getElementById("loader");

export const FallbackLoader = React.memo(() => {
    return (
      <Div divClass="loader-css">
        <Lottie animationData={Loader} loop={true} className='loader-dimensions'/>
      </Div>
    );
})

export const LoaderComponent = React.memo(() => {
    return ReactDOM.createPortal(<FallbackLoader/>,loaderContainer)
})
