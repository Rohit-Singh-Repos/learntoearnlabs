import React from 'react'
import { CommonCard, Div, Paragraph, SliderComponent, SubHeading, Image } from 'components'

export const CompanyPortfolio = React.memo(({
    sectionData
}) => {

    const { 
        headingTextData, 
        sliderData,
        discountAndOffersSection:{
            discountHeadingText,
            discountCard
        } = {}
    } = sectionData;

    return (
        <Div divClass="container mt-5">
        <Div divClass="row">
          <Div divClass="col-lg-12 col-md-12 col-sm-12 mt-3">
            <SubHeading subheadingClass="fw-bold">{headingTextData}</SubHeading>
            <SliderComponent 
              sliderData={sliderData}
              contentClass="h-100 mt-4 d-flex justify-content-center align-items-center"
              imgClass="img-fluid h-100"
              imgWidth={180}
              imgHeight={150}
            />
          </Div>
          <Div divClass="row col-sm-12 col-md-12 col-lg-12 d-flex justify-content-around mt-5 pt-3">
          <SubHeading subheadingClass="fw-bold">{discountHeadingText}</SubHeading>
          {discountCard && discountCard.length !== 0 ? (
            discountCard.map((item) => (
              <CommonCard
                cardClass="rounded-0 col-sm-12 col-md-4 col-lg-4 text-center mt-5"
                key={item.id}
              >
                <Image imagePath={item.cardImage} imageClass="img-fluid mb-3" imageAltText="" width={200} height={200}/>
                <Paragraph>{item.cardText}</Paragraph>
              </CommonCard>
            ))
          ) : (
            <></>
          )}
        </Div>
        </Div>
      </Div>
    )
})
