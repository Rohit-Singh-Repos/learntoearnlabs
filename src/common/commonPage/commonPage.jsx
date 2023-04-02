import React,{Suspense,lazy} from 'react'

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const LandingPage = lazy(() => import('common/commonPage/commonPageComponent1').then(module => ({ default: module.LandingPage })));

export const CommonPageComponent = React.memo(({cardData,headingText,primaryButtonText,outlinedButtonText}) => {
    return (
      <Suspense fallback={<FallbackLoader/>}>
          <LandingPage
            cardData={cardData}
            headingText={headingText}
            primaryButtonText={primaryButtonText}
            outlinedButtonText={outlinedButtonText}
          />
      </Suspense>
    )
})
