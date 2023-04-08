import React,{Suspense,lazy} from 'react'
import { trainTheTrainerSchema, coursesInputSchemas } from 'schemas';

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const CommonPageComponent = lazy(() => import('common/commonPage/CommonPage').then(module => ({ default: module.CommonPageComponent })));

export const TrainTheTrainerProgram = React.memo(() => {
    return (
      <Suspense fallback={<FallbackLoader/>}>
          <CommonPageComponent
            sectionData={trainTheTrainerSchema}
            inputSchemas={coursesInputSchemas}
          />
      </Suspense>
    )
})