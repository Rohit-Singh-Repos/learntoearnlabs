import React,{Suspense, lazy} from 'react'
const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));

export const DSAProgrammingPages = React.memo(() => {
    return (
      <Suspense fallback={<FallbackLoader/>}>
        <div>DSAProgrammingPages</div>
      </Suspense>
    )
})