import React,{Suspense,lazy} from 'react'

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const AboutLandingPage = lazy(() => import('pages/about/AboutComponent1').then(module => ({ default: module.AboutLandingPage })));
const VissionAndMission = lazy(() => import('pages/about/AboutComponent2').then(module => ({ default: module.VissionAndMission })));
const NeedToJoin = lazy(() => import('pages/about/AboutComponent3').then(module => ({ default: module.NeedToJoin })));
const Relationship = lazy(() => import('pages/about/AboutComponent4').then(module => ({ default: module.Relationship })));
const DirectorsBlock = lazy(() => import('pages/about/AboutComponent5').then(module => ({ default: module.DirectorsBlock })));
const CoreTeamMembers = lazy(() => import('pages/about/AboutComponent6').then(module => ({ default: module.CoreTeamMembers })));
const PictureGallery = lazy(() => import('pages/about/AboutComponent7').then(module => ({ default: module.PictureGallery })));

export const AboutPage = () => {
  return (
    <Suspense fallback={<FallbackLoader/>}>
        <AboutLandingPage/>
        <VissionAndMission/>
        <NeedToJoin/>
        <Relationship/>
        <DirectorsBlock/>
        <CoreTeamMembers/>
        <PictureGallery/>
    </Suspense>
  )
}
