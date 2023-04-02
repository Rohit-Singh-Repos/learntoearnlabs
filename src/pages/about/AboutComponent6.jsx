import React from "react";
import { SliderComponent } from "components/Slider";
import { Div } from "components";

export const CoreTeamMembers = React.memo(() => {
  const sliderData = [
    {id:1,imagePath:"",altText:""},
    {id:2,imagePath:"",altText:""},
    {id:3,imagePath:"",altText:""},
    {id:4,imagePath:"",altText:""},
    {id:5,imagePath:"",altText:""},
    {id:6,imagePath:"",altText:""},
    {id:7,imagePath:"",altText:""},
    {id:8,imagePath:"",altText:""},
  ]
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
        <Div divClass="col-lg-12 col-md-12 col-sm-12">
          <SliderComponent 
            sliderData={sliderData}
          />
        </Div>
      </Div>
    </Div>
  );
});
