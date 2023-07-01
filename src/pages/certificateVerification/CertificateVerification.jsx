import { Div } from "components";
import React, { useState, useEffect, Suspense, lazy } from "react";
import { useHookstate } from "@hookstate/core";
import { PAGE_STATE, MOBILE_DETECTOR } from "globalStore/globalState";
import { useLocation } from "react-router-dom";

const FallbackLoader = lazy(() =>
  import("components/Loaders").then((module) => ({
    default: module.FallbackLoader,
  }))
);
const CertificateVerification = lazy(() =>
  import(
    "pages/certificateVerification/CertificateVerificationComponent1"
  ).then((module) => ({ default: module.CertificateVerification }))
);
const CertificateInformation = lazy(() =>
  import(
    "pages/certificateVerification/CertificateVerificationComponent2"
  ).then((module) => ({ default: module.CertificateInformation }))
);

export const Certificates = React.memo(() => {
  const [mobile, setMobile] = useState(false);
  const { pathname } = useLocation();
  const [showCertificateInfo, setShowCertificateInfo] = useState(false);
  const [certificateInfoData, setCertificateInfoData] = useState(null);
  const { pageVisiblity } = useHookstate(PAGE_STATE);
  const { mobileDetector } = useHookstate(MOBILE_DETECTOR);
  const handleResize = () => {
    if (mobileDetector.get()) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    pageVisiblity.set(false);
  }, []);

  useEffect(() => {
    setShowCertificateInfo(false);
    setCertificateInfoData(null);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
      handleResize()
  });

  return (
    <Suspense fallback={<FallbackLoader />}>
      <Div divClass="container mt-5 pt-4">
        <Div divClass="row align-items-center">
          {showCertificateInfo && certificateInfoData ? (
            <CertificateInformation
              mobileDetector={mobile}
              certificateInfoData={certificateInfoData}
              setShowCertificateInfo={setShowCertificateInfo}
              setCertificateInfoData={setCertificateInfoData}
            />
          ) : (
            <CertificateVerification
              mobileDetector={mobile}
              setShowCertificateInfo={setShowCertificateInfo}
              setCertificateInfoData={setCertificateInfoData}
            />
          )}
        </Div>
      </Div>
    </Suspense>
  );
});
