import React from "react";
import { SliderComponent } from "components/Slider";
import { Div, SubHeading } from "components";
import { ABOUTUS_PAGE_IMAGES } from "assets/images";
import { uuid } from "helpers/utils/uuid";

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
    {id:uuid(),imagePath:galleryImage1,altText:""},
    {id:uuid(),imagePath:galleryImage2,altText:""},
    {id:uuid(),imagePath:galleryImage3,altText:""},
    {id:uuid(),imagePath:galleryImage4,altText:""},
    {id:uuid(),imagePath:galleryImage5,altText:""},
    {id:uuid(),imagePath:galleryImage6,altText:"",},
    {id:uuid(),imagePath:galleryImage7,altText:"",},
    {id:uuid(),imagePath:galleryImage8,altText:"",},
    {id:uuid(),imagePath:galleryImage9,altText:"",},
    {id:uuid(),imagePath:galleryImage10,altText:"",},
    {id:uuid(),imagePath:galleryImage11,altText:"",},
    {id:uuid(),imagePath:galleryImage12,altText:"",},
    {id:uuid(),imagePath:galleryImage13,altText:"",},
    {id:uuid(),imagePath:galleryImage14,altText:"",},
    {id:uuid(),imagePath:galleryImage15,altText:"",},
    {id:uuid(),imagePath:galleryImage16,altText:"",},
    {id:uuid(),imagePath:galleryImage17,altText:"",},
    {id:uuid(),imagePath:galleryImage18,altText:"",},
    {id:uuid(),imagePath:galleryImage19,altText:"",},
    {id:uuid(),imagePath:galleryImage20,altText:"",},
    {id:uuid(),imagePath:galleryImage21,altText:"",},
    {id:uuid(),imagePath:galleryImage22,altText:"",},
    {id:uuid(),imagePath:galleryImage23,altText:"",},
    {id:uuid(),imagePath:galleryImage24,altText:"",},
    {id:uuid(),imagePath:galleryImage25,altText:"",},
    {id:uuid(),imagePath:galleryImage26,altText:"",},
    {id:uuid(),imagePath:galleryImage27,altText:"",},
    {id:uuid(),imagePath:galleryImage28,altText:"",},
    {id:uuid(),imagePath:galleryImage29,altText:"",},
    {id:uuid(),imagePath:galleryImage30,altText:"",},
  ]
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
         <SubHeading subheadingClass="fw-bold">Picture Gallery</SubHeading>
        <Div divClass="col-lg-12 col-md-12 col-sm-12 mt-5">
          <SliderComponent 
            sliderData={sliderData}
            verticalAlign={true}
            contentClass="rounded-0"
            imgClass="img-thumbnail"
            imgWidth={250}
            imgHeight={250}
          />
        </Div>
      </Div>
    </Div>
  );
});
