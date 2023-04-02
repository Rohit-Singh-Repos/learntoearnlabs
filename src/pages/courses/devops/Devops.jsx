import React,{Suspense,lazy} from 'react'
import { cloudDevopsSchema } from 'schemas';

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const CommonPageComponent = lazy(() => import('common/commonPage/commonPage').then(module => ({ default: module.CommonPageComponent })));

export const DevopsPage = React.memo(() => {
    return (
      <Suspense fallback={<FallbackLoader/>}>
          <CommonPageComponent
            cardData={cloudDevopsSchema.landingPageSection}
            headingText="Cloud Computing & Devops Training Program"
            primaryButtonText="Apply Now"
            outlinedButtonText="Download Syllabus"
          />
      </Suspense>
    )
})
