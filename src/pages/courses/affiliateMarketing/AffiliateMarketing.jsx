import React,{Suspense,lazy} from 'react'
import { affiliateMarketingSchema, coursesInputSchemas } from 'schemas';

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const CommonPageComponent = lazy(() => import('common/commonPage/CommonPage').then(module => ({ default: module.CommonPageComponent })));

export const AffiliateMarketingCourse = React.memo(() => {
    return (
      <Suspense fallback={<FallbackLoader/>}>
          <CommonPageComponent
            sectionData={affiliateMarketingSchema}
            inputSchemas={coursesInputSchemas}
          />
      </Suspense>
    )
})