import React from "react";
import { Div } from "components";
import { HeroSection } from "common";
import { homePageSchema } from "schemas";
import { COVER_IMAGES } from 'assets/images';

export const LandingPage = React.memo(({mobileDetector}) => {
  return (
    <Div divClass="container mb-5">
      <HeroSection
          cardData={homePageSchema}
          mobileDetector={mobileDetector}
          paragraphText2="One of the best training institutes promising Job Assistance or Job Guarantee on Training Programs..."
          primaryButtonText="Join Now"
          coverImage={COVER_IMAGES.homePageCoverImage}
        />
    </Div>
  );
});
