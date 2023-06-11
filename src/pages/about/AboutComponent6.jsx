import React from "react";
import { SliderComponent } from "components/Slider";
import { Div, SubHeading } from "components";
import { ABOUTUS_PAGE_IMAGES } from "assets/images";
import { uuid } from "helpers/utils/uuid";

export const CoreTeamMembers = React.memo(() => {
  const { 
    uttamKumarImage,
    rajatKumarImage,
    peeyushImage,
    yashImage,
    bharteshImage,
    mikinImage
   } = ABOUTUS_PAGE_IMAGES
  const sliderData = [
    {id:uuid(),imagePath:uttamKumarImage,altText:"",imageName:`Mr. Uttam Kmar Gupta`,imageEducation:"Phd.(Pursuing), M.Tech, B.Tech (EE)",imageExperience:"(15+ years experience)"},
    {id:uuid(),imagePath:rajatKumarImage,altText:"",imageName:`Mr. Rajat Kumar`,imageEducation:"M.Tech, B.Tech (CSE)",imageExperience:"(12+ years experience)"},
    {id:uuid(),imagePath:peeyushImage,altText:"",imageName:`Dr. Peeyush Kamlesh`,imageEducation:"Phd, M.Sc.(Physics)",imageExperience:"(12+ years experience)"},
    {id:uuid(),imagePath:bharteshImage,altText:"",imageName:`Mr. Bhartesh Raj`,imageEducation:"Phd.(Pursuing), M.Tech, B.Tech",imageExperience:"(12+ years experience)"},
    {id:uuid(),imagePath:yashImage,altText:"",imageName:`Mr. Yash Agarwal`,imageEducation:"MCA, BCA",imageExperience:"(10+ years experience)"},
    {id:uuid(),imagePath:mikinImage,altText:"",imageName:`Mr. Mikin Kumar`,imageEducation:"B.Tech (IT)",imageExperience:"(5+ years experience)"}
  ]
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
         <SubHeading subheadingClass="fw-bold text-primary">People who creates value</SubHeading>
         <SubHeading subheadingClass="fw-bold">Core Team Members</SubHeading>
        <Div divClass="col-lg-12 col-md-12 col-sm-12 mt-5">
          <SliderComponent 
            sliderData={sliderData}
            verticalAlign={true}
            sectionDetector={true}
            contentClass="card border-1 rounded-0 text-light h-100"
            imgClass="img-fluid"
            imgWidth={250}
            imgHeight={250}
          />
        </Div>
      </Div>
    </Div>
  );
});
