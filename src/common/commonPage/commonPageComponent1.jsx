import React from 'react';
import { Div } from 'components';
import { HeroSection } from 'common/HeroSection'

export const LandingPage = React.memo(({cardData,headingText,primaryButtonText,outlinedButtonText}) => {
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