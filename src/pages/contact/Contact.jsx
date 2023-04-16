import React,{Suspense, lazy} from 'react'
import { Div } from 'components';
import { coursesInputSchemas } from 'schemas';

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const MapPageAreaComponent = lazy(() => import('pages/contact/ContactComponent1').then(module => ({ default: module.MapPageAreaComponent })));
const ContactFormAreaComponent = lazy(() => import('pages/contact/ContactComponent2').then(module => ({ default: module.ContactFormAreaComponent })));

export const ContactPage = React.memo(() => {
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