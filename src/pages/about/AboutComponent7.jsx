import React from "react";
import { SliderComponent } from "components/Slider";
import { Div, SubHeading } from "components";
import { ABOUTUS_PAGE_IMAGES } from "assets/images";

export const PictureGallery = React.memo(() => {
  const { 
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
    galleryImage7,
    galleryImage8,
    galleryImage9,
    galleryImage10,
    galleryImage11,
    galleryImage12,
    galleryImage13,
    galleryImage14,
    galleryImage15,
    galleryImage16,
    galleryImage17,
    galleryImage18,
    galleryImage19,
    galleryImage20,
    galleryImage21,
    galleryImage22,
    galleryImage23,
    galleryImage24,
    galleryImage25,
    galleryImage26,
    galleryImage27,
    galleryImage28,
    galleryImage29,
    galleryImage30
   } = ABOUTUS_PAGE_IMAGES
  const sliderData = [
    {id:1,imagePath:galleryImage1,altText:""},
    {id:2,imagePath:galleryImage2,altText:""},
    {id:3,imagePath:galleryImage3,altText:""},
    {id:3,imagePath:galleryImage4,altText:""},
    {id:4,imagePath:galleryImage5,altText:""},
    {id:5,imagePath:galleryImage6,altText:"",},
    {id:5,imagePath:galleryImage7,altText:"",},
    {id:5,imagePath:galleryImage8,altText:"",},
    {id:5,imagePath:galleryImage9,altText:"",},
    {id:5,imagePath:galleryImage10,altText:"",},
    {id:5,imagePath:galleryImage11,altText:"",},
    {id:5,imagePath:galleryImage12,altText:"",},
    {id:5,imagePath:galleryImage13,altText:"",},
    {id:5,imagePath:galleryImage14,altText:"",},
    {id:5,imagePath:galleryImage15,altText:"",},
    {id:5,imagePath:galleryImage16,altText:"",},
    {id:5,imagePath:galleryImage17,altText:"",},
    {id:5,imagePath:galleryImage18,altText:"",},
    {id:5,imagePath:galleryImage19,altText:"",},
    {id:5,imagePath:galleryImage20,altText:"",},
    {id:5,imagePath:galleryImage21,altText:"",},
    {id:5,imagePath:galleryImage22,altText:"",},
    {id:5,imagePath:galleryImage23,altText:"",},
    {id:5,imagePath:galleryImage24,altText:"",},
    {id:5,imagePath:galleryImage25,altText:"",},
    {id:5,imagePath:galleryImage26,altText:"",},
    {id:5,imagePath:galleryImage27,altText:"",},
    {id:5,imagePath:galleryImage28,altText:"",},
    {id:5,imagePath:galleryImage29,altText:"",},
    {id:5,imagePath:galleryImage30,altText:"",},
  ]
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
         <SubHeading subheadingClass="fw-bold">Picture Gallery</SubHeading>
        <Div divClass="col-lg-12 col-md-12 col-sm-12 mt-5">
          <SliderComponent 
            sliderData={sliderData}
          />
        </Div>
      </Div>
    </Div>
  );
});
