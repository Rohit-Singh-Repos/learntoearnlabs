import React,{Suspense,lazy} from 'react'
import { contentMarketingSchema, coursesInputSchemas } from 'schemas';

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const CommonPageComponent = lazy(() => import('common/commonPage/CommonPage').then(module => ({ default: module.CommonPageComponent })));

export const ContentMarketingCourse = React.memo(() => {
    return (
      <Suspense fallback={<FallbackLoader/>}>
          <CommonPageComponent
            sectionData={contentMarketingSchema}
            inputSchemas={coursesInputSchemas}
          />
      </Suspense>
    )
})