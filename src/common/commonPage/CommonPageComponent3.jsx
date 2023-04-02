import React from 'react'
import { Div, CommonCard, Paragraph, Heading } from 'components'

export const TrainingRoadMap = React.memo(({
  sectionData
}) => {
    const { trainingRoadmapSection : {
      headingPrimaryText,
      headingSecondaryText,
      paragraphText,
      cardTextData
    } = {} } = sectionData
    return (
      <Div divClass="container mt-4">
        <Div divClass="row">
            <Div divClass="col-sm-12 col-md-5 col-lg-5">
              <Heading headingClass="text-primary fw-bold">{headingPrimaryText}</Heading>
              <Heading headingClass="fw-bold">{headingSecondaryText}</Heading>
              <Paragraph paragraphClass="align-justify mt-5">{paragraphText}</Paragraph>
            </Div>
            <Div divClass="row col-sm-12 col-md-7 col-lg-7 d-flex justify-content-around">
              {
                cardTextData && cardTextData.length !== 0 ? cardTextData.map((item) => (
                  <CommonCard key={item.id} cardClass="card mt-3 rounded-0 bg-primary text-light text-center fw-bold col-lg-5">
                    {item.cardText}
                  </CommonCard>
                )) : <></>
               }
            </Div>
        </Div>
      </Div>
    )
})