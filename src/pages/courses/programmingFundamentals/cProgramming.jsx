import React,{Suspense, lazy} from 'react'
import { cProgrammingSchema, coursesInputSchemas } from 'schemas';

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const CommonPageComponent = lazy(() => import('common/commonPage/CommonPage').then(module => ({ default: module.CommonPageComponent })));

export const CProgrammingPage = React.memo(() => {
    return (
      <Suspense fallback={<FallbackLoader/>}>
        <CommonPageComponent
            sectionData={cProgrammingSchema}
            inputSchemas={coursesInputSchemas}
        />
      </Suspense>
    )
})
