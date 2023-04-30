import React from "react";
import { Div, Paragraph, SliderComponent, SubHeading } from "components";
import { HOME_PAGE_IMAGES } from "assets/images";
import { uuid } from "helpers/utils/uuid";

export const Placements = React.memo(() => {
  const sliderData = [
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.accentureLogo,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.amazonImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.byjuImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.congnizantImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.commvaultImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.credImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.globalLogicImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.googleImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.hotstarImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.mobileProgrammingImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.morganStanley,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.nagarrowImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.nttDataImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.oyoImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.paytmImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.publicSapientImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.tataConsultancyImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.uberImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.urbanCompanyImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.vedantuImage,altText:""},
    {id:uuid(),imagePath:HOME_PAGE_IMAGES.zomatoImage,altText:""}
  ]
  return (
    <Div divClass="container mb-5 mt-5">
      <Div divClass="row">
        <SubHeading subheadingClass="fw-bold text-center">
          Placements & Tie-ups
        </SubHeading>
        <Paragraph paragraphClass="align-justify text-center text-15 mt-2">
          Our students are working with renowned companies and are happy with
          their careers. <br />
          We also have tie-ups with 300+ corporate professionals.
        </Paragraph>
      </Div>
      <Div divClass="row">
      <Div divClass="col-lg-12 col-md-12 col-sm-12 mt-3">
          <SliderComponent 
            sliderData={sliderData}
            verticalAlign={true}
            imgClass="img-fluid"
            imgHeight={250}
            imgWidth={250}
          />
        </Div>
      </Div>
    </Div>
  );
});
