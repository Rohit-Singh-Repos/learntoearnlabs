import { Div } from 'components';
import React,{useState, useEffect, Suspense, lazy} from 'react'

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const CertificateVerification = lazy(() => import('pages/certificateVerification/CertificateVerificationComponent1').then(module => ({ default: module.CertificateVerification })));
const CertificateInformation = lazy(() => import('pages/certificateVerification/CertificateVerificationComponent2').then(module => ({ default: module.CertificateInformation })));

export const Certificates = React.memo(() => {
  const [mobile, setMobile] = useState(false);
  const handleResize = () => {
      if (window.innerWidth < 990) {
        setMobile(true);
      } else {
        setMobile(false);
      }
  };
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  
  return (
    <Suspense fallback={<FallbackLoader/>}>
      <Div divClass="container mt-5 pt-4">
        <Div divClass="row align-items-center">
            <CertificateVerification mobileDetector={mobile}/>
            <CertificateInformation mobileDetector={mobile}/>
        </Div>
      </Div>
    </Suspense>
  )
})
