import React from 'react';
import { Div } from 'components';
import { HeroSection } from 'common/HeroSection'

export const LandingPage = React.memo(({sectionData,mobileDetector}) => {
    const { landingPageSection : {
      imagePath,
      headingText,
      subHeadingText,
      cardData,
      primaryButtonText,
      outlinedButtonText
    } = {} } = sectionData

    return (
      <Div divClass="container">
        <HeroSection
          mobileDetector={mobileDetector}
          imagePath={imagePath}
          cardData={cardData}
          headingText={headingText}
          subHeadingText={subHeadingText}
          primaryButtonText={primaryButtonText}
          outlinedButtonText={outlinedButtonText}
        />
      </Div>
    )
})