import React,{Suspense,lazy} from 'react'

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const LandingPage = lazy(() => import('common/commonPage/CommonPageComponent1').then(module => ({ default: module.LandingPage })));
const CloudDevopsCareer = lazy(() => import('common/commonPage/CommonPageComponent2').then(module => ({ default: module.CloudDevopsCareer })));
const TrainingRoadMap = lazy(() => import('common/commonPage/CommonPageComponent3').then(module => ({ default: module.TrainingRoadMap })));

export const CommonPageComponent = React.memo(({sectionData,headingText,primaryButtonText,outlinedButtonText}) => {
    return (
      <Suspense fallback={<FallbackLoader/>}>
          <LandingPage
            cardData={sectionData.landingPageSection}
            headingText={headingText}
            primaryButtonText={primaryButtonText}
            outlinedButtonText={outlinedButtonText}
          />
          <CloudDevopsCareer
            sectionData={sectionData}
          />
          <TrainingRoadMap/>
      </Suspense>
    )
})
