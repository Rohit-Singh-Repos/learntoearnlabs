import React, { Suspense, lazy } from "react";
import { Div, Heading, Paragraph, Button, LinkComponent } from "components";

const FallbackLoader = lazy(() =>
  import("components/Loaders").then((module) => ({
    default: module.FallbackLoader,
  }))
);

export const ThankYou = React.memo(() => {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <Div divClass="container mt-5">
        <Div divClass="row">
          <Div divClass="content">
            <Div divClass="wrapper-1">
              <Div divClass="wrapper-2">
                <Heading headingClass="thank-you-heading">Thank you !</Heading>
                <Paragraph paragraphClass="mb-5">Your query has been submitted successfully.</Paragraph>
                <LinkComponent linkClass="go-home" pathName="/home">go home</LinkComponent>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Suspense>
  );
});
