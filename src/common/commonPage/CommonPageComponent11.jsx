import React from "react";
import { Div, SubHeading,CommonCard, Paragraph } from "components";
import { InstituteDirector } from "common/DirectorsCard";
import { ABOUTUS_PAGE_IMAGES } from "assets/images";

export const GuidanceSection = React.memo(({sectionData}) => {
  const { 
    headingText,
    cardPicData,
    cardInfoData
   } = sectionData
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
        <Div divClass="col-lg-12 col-md-12 col-sm-12 mt-3">
          <SubHeading subheadingClass="fw-bold mb-5">{headingText}</SubHeading>
          <InstituteDirector
            fullstack={true}
            directorName="Mr. Mohit Singh"
            directorQualification="M.Tech, B.Tech (C.S.E)"
            imagePath={ABOUTUS_PAGE_IMAGES.mohitSinghImage}
            imageClass="img-thumbnail img-fluid img-dimensions mb-3"
            imageAltText=""
            cardClass="card p-4 rounded-0 bg-silver"
          >
            <Paragraph paragraphClass="align-justify">
              Mr. Mohit Singh is a professional full-stack trainer, project
              consultant and startup mentor. He is holding expertise in Java,
              Application Design, MERN Stack, DevOps, Design Thinking and User
              Experience Design.
            </Paragraph>
            <Paragraph paragraphClass="align-justify">
              He has trained thousands of students & hundreds of employed
              professionals. He completed his trainings in Google, Gurugram and
              short term projects in IIT Delhi, IIT BHU & IIT Jodhpur.
            </Paragraph>
            <Paragraph paragraphClass="align-justify">
              He is also recognized as Mentor with MEITY Startup Hub, startup
              India, Punjab Startup, startup Uttarakhand, Mumbai State
              Innovation Society, Atal Innovation Mission, etc. in the area of
              education & utility services.
            </Paragraph>
          </InstituteDirector>
        </Div>
      </Div>
    </Div>
  );
});
