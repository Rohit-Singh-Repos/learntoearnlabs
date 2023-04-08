import React from 'react';
import { Div } from 'components';
import { HeroSection } from 'common/HeroSection'

export const LandingPage = React.memo(({sectionData}) => {
    const { landingPageSection : {
      headingText,
      cardData,
      primaryButtonText,
      outlinedButtonText
    } = {} } = sectionData
    return (
      <Div divClass="container mb-5 mt-5">
        <HeroSection
          cardData={cardData}
          headingText={headingText}
          primaryButtonText={primaryButtonText}
          outlinedButtonText={outlinedButtonText}
        />
      </Div>
    )
})