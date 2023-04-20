import React from "react";
import { Div, SubHeading, Paragraph } from "components";
import { InstituteDirector } from "common/DirectorsCard";

export const GuidanceSection = React.memo(({sectionData}) => {
  const { 
    headingText,
    cardPicData:{
        imagePath,
        imageHeadingText,
        imageEducationText
    } = {},
    cardInfoData:{
        paragraphText1, 
        paragraphText2, 
        paragraphText3
    } = {}
   } = sectionData
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
        <Div divClass="col-lg-12 col-md-12 col-sm-12 mt-3">
          <SubHeading subheadingClass="fw-bold mb-5">{headingText}</SubHeading>
          <InstituteDirector
            fullstack={true}
            directorName={imageHeadingText}
            directorQualification={imageEducationText}
            imagePath={imagePath}
            imageClass="img-thumbnail img-fluid img-dimensions mb-3"
            imageAltText=""
            cardClass="card p-4 rounded-0 bg-silver"
          >
            <Paragraph paragraphClass="align-justify">
              {paragraphText1}
            </Paragraph>
            <Paragraph paragraphClass="align-justify">
              {paragraphText2}
            </Paragraph>
            <Paragraph paragraphClass="align-justify">
              {paragraphText3}
            </Paragraph>
          </InstituteDirector>
        </Div>
      </Div>
    </Div>
  );
});
