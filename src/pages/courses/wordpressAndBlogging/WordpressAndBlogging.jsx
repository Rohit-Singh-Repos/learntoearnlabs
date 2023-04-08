import React,{Suspense,lazy} from 'react'
import { wordpressSchema, coursesInputSchemas } from 'schemas';

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const CommonPageComponent = lazy(() => import('common/commonPage/CommonPage').then(module => ({ default: module.CommonPageComponent })));

export const WordpressAndBlogging = React.memo(() => {
    return (
      <Suspense fallback={<FallbackLoader/>}>
          <CommonPageComponent
            sectionData={wordpressSchema}
            inputSchemas={coursesInputSchemas}
          />
      </Suspense>
    )
})