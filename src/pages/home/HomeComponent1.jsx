import React from "react";
import { Div } from "components";
import { HeroSection } from "common";
import { homePageSchema } from "schemas";
import { COVER_IMAGES } from 'assets/images';

export const LandingPage = React.memo(() => {
  return (
    <Div divClass="container mb-5 mt-5">
      <HeroSection
          cardData={homePageSchema}
          paragraphText="When no one understand your talent, then we believe that you have
          the capabilities to do miracles…"
          primaryButtonText="Join Now"
          coverImage={COVER_IMAGES.homePageCoverImage}
        />
    </Div>
  );
});
