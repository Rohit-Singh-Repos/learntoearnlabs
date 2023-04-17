import React from "react";
import { Div, Paragraph, SliderComponent, SubHeading, Image } from "components";
import { HOME_PAGE_IMAGES } from "assets/images";

export const Placements = React.memo(() => {
  const sliderData = [
    {id:1,imagePath:HOME_PAGE_IMAGES.accentureLogo,altText:""},
    {id:2,imagePath:HOME_PAGE_IMAGES.amazonImage,altText:""},
    {id:3,imagePath:HOME_PAGE_IMAGES.byjuImage,altText:""},
    {id:4,imagePath:HOME_PAGE_IMAGES.congnizantImage,altText:""},
    {id:5,imagePath:HOME_PAGE_IMAGES.commvaultImage,altText:""},
    {id:6,imagePath:HOME_PAGE_IMAGES.credImage,altText:""},
    {id:7,imagePath:HOME_PAGE_IMAGES.globalLogicImage,altText:""},
    {id:8,imagePath:HOME_PAGE_IMAGES.googleImage,altText:""},
    {id:9,imagePath:HOME_PAGE_IMAGES.hotstarImage,altText:""},
    {id:10,imagePath:HOME_PAGE_IMAGES.mobileProgrammingImage,altText:""},
    {id:11,imagePath:HOME_PAGE_IMAGES.morganStanley,altText:""},
    {id:12,imagePath:HOME_PAGE_IMAGES.nagarrowImage,altText:""},
    {id:13,imagePath:HOME_PAGE_IMAGES.nttDataImage,altText:""},
    {id:14,imagePath:HOME_PAGE_IMAGES.oyoImage,altText:""},
    {id:15,imagePath:HOME_PAGE_IMAGES.paytmImage,altText:""},
    {id:16,imagePath:HOME_PAGE_IMAGES.publicSapientImage,altText:""},
    {id:17,imagePath:HOME_PAGE_IMAGES.tataConsultancyImage,altText:""},
    {id:18,imagePath:HOME_PAGE_IMAGES.uberImage,altText:""},
    {id:19,imagePath:HOME_PAGE_IMAGES.urbanCompanyImage,altText:""},
    {id:20,imagePath:HOME_PAGE_IMAGES.vedantuImage,altText:""},
    {id:20,imagePath:HOME_PAGE_IMAGES.zomatoImage,altText:""}
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
