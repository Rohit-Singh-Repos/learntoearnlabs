import React,{Suspense, lazy, useEffect} from 'react'
import { Div } from 'components';
import { coursesInputSchemas } from 'schemas';
import { useHookstate } from "@hookstate/core"
import { PAGE_STATE } from "globalStore/globalState";

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const MapPageAreaComponent = lazy(() => import('pages/contact/ContactComponent1').then(module => ({ default: module.MapPageAreaComponent })));
const ContactFormAreaComponent = lazy(() => import('pages/contact/ContactComponent2').then(module => ({ default: module.ContactFormAreaComponent })));

export const ContactPage = React.memo(() => {
  const { pageVisiblity } = useHookstate(PAGE_STATE)
  useEffect(() => {
    pageVisiblity.set(false)
  },[])
  return (
    <Suspense fallback={<FallbackLoader/>}>
      <Div divClass="container mt-5 pt-4">
        <Div divClass="row">
          <MapPageAreaComponent/>
          <ContactFormAreaComponent inputSchemas={coursesInputSchemas}/>
        </Div>
      </Div>
    </Suspense>
  )
})