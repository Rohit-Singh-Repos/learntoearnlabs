import { Div } from 'components'
import React from 'react'
import Lottie from "lottie-react";
import ErrorAnimation from "assets/loader/404.json"

export const ErrorPage = () => {
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
        <Div divClass="error-loader-css">
          <Lottie animationData={ErrorAnimation} loop={true} className='loader-dimensions'/>
        </Div>
      </Div>
    </Div>
  )
}
