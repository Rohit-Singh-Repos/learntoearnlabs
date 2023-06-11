import { Div } from 'components'
import React,{useEffect} from 'react'
import Lottie from "lottie-react";
import ErrorAnimation from "assets/loader/404.json"
import { useHookstate } from "@hookstate/core"
import { PAGE_STATE } from "globalStore/globalState";

export const ErrorPage = () => {
  const { pageVisiblity } = useHookstate(PAGE_STATE)
  useEffect(() => {
    pageVisiblity.set(false)
  },[])
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
