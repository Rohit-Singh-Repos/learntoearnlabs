import React,{Suspense,lazy} from 'react'
import { designThinkingSchema, coursesInputSchemas } from 'schemas';

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const CommonPageComponent = lazy(() => import('common/commonPage/CommonPage').then(module => ({ default: module.CommonPageComponent })));

export const DesignThinking = React.memo(() => {
    return (
      <Suspense fallback={<FallbackLoader/>}>
          <CommonPageComponent
            sectionData={designThinkingSchema}
            inputSchemas={coursesInputSchemas}
          />
      </Suspense>
    )
})