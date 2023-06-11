import React, { Suspense, lazy, useEffect } from "react";
import { Div, Heading, Paragraph, LinkComponent } from "components";
import { useLocation } from "react-router-dom";

const FallbackLoader = lazy(() =>
  import("components/Loaders").then((module) => ({
    default: module.FallbackLoader,
  }))
);

export const ThankYou = React.memo(() => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense fallback={<FallbackLoader />}>
      <Div divClass="container mt-5">
        <Div divClass="row">
          <Div divClass="content">
            <Div divClass="wrapper-1">
              <Div divClass="wrapper-2">
                <Heading headingClass="thank-you-heading">Thank you !</Heading>
                <Paragraph paragraphClass="mb-5">Your query has been submitted successfully.</Paragraph>
                <LinkComponent linkClass="go-home" pathName="/">Go home</LinkComponent>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Suspense>
  );
});
