import React,{Suspense,lazy} from 'react'
import { mySQLSchema, coursesInputSchemas } from 'schemas';

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const CommonPageComponent = lazy(() => import('common/commonPage/CommonPage').then(module => ({ default: module.CommonPageComponent })));

export const MySQLDatabase = React.memo(() => {
    return (
      <Suspense fallback={<FallbackLoader/>}>
          <CommonPageComponent
            sectionData={mySQLSchema}
            inputSchemas={coursesInputSchemas}
          />
      </Suspense>
    )
})