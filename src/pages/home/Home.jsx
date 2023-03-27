import React,{Suspense,lazy} from 'react'

const LandingPage = lazy(() => import('pages/home/HomeComponent1').then(module => ({ default: module.LandingPage })));
const ProfessionalJourney = lazy(() => import('pages/home/HomeComponent2').then(module => ({ default: module.ProfessionalJourney })));
const WorkingExperience = lazy(() => import('pages/home/HomeComponent3').then(module => ({ default: module.WorkingExperience })));
const JoinComponent = lazy(() => import('pages/home/HomeComponent4').then(module => ({ default: module.JoinComponent })));
const TrainingPrograms = lazy(() => import('pages/home/HomeComponent5').then(module => ({ default: module.TrainingPrograms })));
const ShortTermCourses = lazy(() => import('pages/home/HomeComponent6').then(module => ({ default: module.ShortTermCourses })));
const UpskillKnowledge = lazy(() => import('pages/home/HomeComponent7').then(module => ({ default: module.UpskillKnowledge })));
const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));

export const HomePage = React.memo(() => {
  return (
    <Suspense fallback={<FallbackLoader/>}>
      <LandingPage/>
      <ProfessionalJourney/>
      <WorkingExperience/>
      <JoinComponent/>
      <TrainingPrograms/>
      <ShortTermCourses/>
      <UpskillKnowledge/>
    </Suspense>
  )
})
