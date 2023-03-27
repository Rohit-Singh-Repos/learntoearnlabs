import React from "react";
import { LandingPageCardBorder } from "styles/homePage/homePageStyles";
import { Div, Heading, Paragraph, Image } from "components";

export const LandingPageCard = React.memo(
  ({ cardText, cardText2, borderShow }) => {
    return (
      <Div divClass="card d-flex flex-lg-row align-items-center col-sm-12 col-md-6 col-lg-3 bg-transparent border-0 text-center">
        <Div divClass="card-body">
          <Heading>{cardText}</Heading>
          <Paragraph>{cardText2}</Paragraph>
        </Div>
        {borderShow && <LandingPageCardBorder />}
      </Div>
    );
  }
);

export const CommonCard = React.memo(({cardClass,children}) => {
  return(
    <Div divClass={cardClass}>
      <Div divClass="card-body">
        {children}
      </Div>
    </Div>
  )
})

export const CardImage = React.memo(({imagePath,imageClass,imageAltText,cardClass,children}) => {
  return (
    <Div divClass={cardClass}>
      <Div divClass="row g-0">
        <Div divClass="col-md-4">
          <Image imagePath={imagePath} imageClass={imageClass} imageAltText={imageAltText}/>
        </Div>
        <Div divClass="col-md-8">
          <Div divClass="card-body">
            {children}
          </Div>
        </Div>
      </Div>
    </Div>
  );
})
