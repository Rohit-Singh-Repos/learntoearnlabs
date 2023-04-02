import React,{Suspense,lazy} from 'react'

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const AboutLandingPage = lazy(() => import('pages/about/AboutComponent1').then(module => ({ default: module.AboutLandingPage })));
const VissionAndMission = lazy(() => import('pages/about/AboutComponent2').then(module => ({ default: module.VissionAndMission })));
const NeedToJoin = lazy(() => import('pages/about/AboutComponent3').then(module => ({ default: module.NeedToJoin })));

export const AboutPage = () => {
  return (
    <Suspense fallback={<FallbackLoader/>}>
        <AboutLandingPage/>
        <VissionAndMission/>
        <NeedToJoin/>
    </Suspense>
  )
}
