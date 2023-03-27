import React,{Suspense,lazy} from 'react'

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const AboutLandingPage = lazy(() => import('pages/about/AboutComponent1').then(module => ({ default: module.AboutLandingPage })));

export const AboutPage = () => {
  return (
    <Suspense fallback={<FallbackLoader/>}>
        <AboutLandingPage/>
    </Suspense>
  )
}
