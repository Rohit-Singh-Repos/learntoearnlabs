import React from "react";
import { LandingPageCardBorder } from "styles/homePage/homePageStyles";

export const CardComponent = React.memo(({ cardText, borderShow }) => {
  return (
    <div className="card d-flex flex-lg-row align-items-center col-sm-12 col-md-6 col-lg-3 bg-transparent border-0">
      <div className="card-body">{cardText}</div>
      {borderShow && <LandingPageCardBorder />}
    </div>
  );
});
