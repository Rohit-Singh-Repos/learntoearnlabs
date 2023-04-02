import React,{Suspense,lazy} from 'react'
import { cloudDevopsSchema } from 'schemas';

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const CommonPageComponent = lazy(() => import('common/commonPage/CommonPage').then(module => ({ default: module.CommonPageComponent })));

export const DevopsPage = React.memo(() => {
    return (
      <Suspense fallback={<FallbackLoader/>}>
          <CommonPageComponent
            sectionData={cloudDevopsSchema}
            headingText="Cloud Computing & Devops Training Program"
            primaryButtonText="Apply Now"
            outlinedButtonText="Download Syllabus"
          />
      </Suspense>
    )
})
