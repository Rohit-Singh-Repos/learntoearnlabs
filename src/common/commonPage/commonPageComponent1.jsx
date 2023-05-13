import React from 'react';
import { Div } from 'components';
import { HeroSection } from 'common/HeroSection'

export const LandingPage = React.memo(({sectionData,mobileDetector,courseDetector}) => {
    const { landingPageSection : {
      imagePath,
      headingText,
      subHeadingText,
      paragraphText,
      cardData,
      primaryButtonText,
      outlinedButtonText
    } = {} } = sectionData

    return (
      <Div divClass="container">
        <HeroSection
          mobileDetector={mobileDetector}
          paragraphText={paragraphText}
          courseDetector={courseDetector}
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