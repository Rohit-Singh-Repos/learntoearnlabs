import React from "react";
import {
  Div,
  Paragraph,
} from "components";
import { InstituteDirector } from "common";
import { ABOUTUS_PAGE_IMAGES } from "assets/images";

export const DirectorsBlock = React.memo(() => {
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
        <Div divClass="col-lg-12 col-md-12 col-sm-12 ">
          <InstituteDirector
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
          <InstituteDirector
            directorName="Dr. Shubhendra Gupta"
            directorQualification="Phd, B.Ed, M.Sc (Physics)"
            imagePath={ABOUTUS_PAGE_IMAGES.shubendraGuptaImage}
            imageClass="img-thumbnail img-fluid img-dimensions mb-3"
            imageAltText=""
            cardClass="card p-4 rounded-0 bg-silver"
          >
            <Paragraph paragraphClass="align-justify">
              Dr. Shubhendra Gupta is an experienced digital marketer, Business
              Consultant and startup mentor with a demonstrated history of
              working in the information technology and services industry. 
            </Paragraph>
            <Paragraph paragraphClass="align-justify">
              He use to train students & working professionals for getting
              better job opportunities and train business owners in generating
              profits or leads. His areas of interest are Digital Marketing,
              Business Development, Data Analysis, Strategic Planning, Market
              Research & Reality, User Testing, Website design, etc.
            </Paragraph>
            <Paragraph paragraphClass="align-justify">
              He is also recognized as Mentor with MEITY Startup Hub & Punjab
              Startup in the area of education & business consultation.
            </Paragraph>
          </InstituteDirector>
        </Div>
      </Div>
    </Div>
  );
});
