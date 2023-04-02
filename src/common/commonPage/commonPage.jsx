import React from 'react'
import { LandingPage } from 'common/commonPage/CommonPageComponent1'
import { CloudDevopsCareer } from 'common/commonPage/CommonPageComponent2'
import { TrainingRoadMap } from 'common/commonPage/CommonPageComponent3'
import { CareerOptions } from 'common/commonPage/CommonPageComponent4'

export const CommonPageComponent = React.memo(({sectionData,headingText,primaryButtonText,outlinedButtonText}) => {
    return (
      <>
        <LandingPage
            cardData={sectionData.landingPageSection}
            headingText={headingText}
            primaryButtonText={primaryButtonText}
            outlinedButtonText={outlinedButtonText}
          />
          <CloudDevopsCareer
            sectionData={sectionData}
          />
          <TrainingRoadMap
            sectionData={sectionData}
          />
          <CareerOptions
            sectionData={sectionData}
          />
      </>
    )
})
