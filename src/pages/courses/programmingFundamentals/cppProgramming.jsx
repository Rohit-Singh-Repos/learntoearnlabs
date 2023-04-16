import React,{Suspense, lazy} from 'react'
const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));

export const CPPProgrammingPage = React.memo(() => {
    return (
      <Suspense fallback={<FallbackLoader/>}>
        <div>CPPProgrammingPage</div>
      </Suspense>
    )
})
