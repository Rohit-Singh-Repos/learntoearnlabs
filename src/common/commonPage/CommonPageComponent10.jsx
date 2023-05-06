import React from 'react'
import { Div, SliderComponent, SubHeading } from 'components'

export const TechnologiesAndPlatform = React.memo(({sectionData}) => {
    const { 
      headingTextData,
      sliderData
     } = sectionData
    return (
      <Div divClass="container mt-5">
        <Div divClass="row">
          <Div divClass="col-lg-12 col-md-12 col-sm-12 mt-3">
            <SubHeading subheadingClass="fw-bold">{headingTextData}</SubHeading>
            <SliderComponent 
              sliderData={sliderData}
              verticalAlign={true}
              contentClass="h-100 mt-4 d-flex justify-content-center align-items-center"
              imgClass="img-fluid h-100"
              imgWidth={180}
              imgHeight={150}
            />
          </Div>
        </Div>
      </Div>
    )
})