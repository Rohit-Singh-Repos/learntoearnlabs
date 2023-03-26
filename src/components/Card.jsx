import React from "react";
import { LandingPageCardBorder } from "styles/homePage/homePageStyles";

export const CardComponent = React.memo(({ cardText, cardText2, borderShow }) => {
  return (
    <div className="card d-flex flex-lg-row align-items-center col-sm-12 col-md-6 col-lg-3 bg-transparent border-0 text-center">
      <div className="card-body">
        <h1>{cardText}</h1>
        <p>{cardText2}</p>
      </div>
      {borderShow && <LandingPageCardBorder />}
    </div>
  );
});
