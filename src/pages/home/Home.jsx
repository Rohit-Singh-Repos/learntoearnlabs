import React,{Suspense,lazy} from 'react'

const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const LandingPage = lazy(() => import('pages/home/HomeComponent1').then(module => ({ default: module.LandingPage })));
const ProfessionalJourney = lazy(() => import('pages/home/HomeComponent2').then(module => ({ default: module.ProfessionalJourney })));
const WorkingExperience = lazy(() => import('pages/home/HomeComponent3').then(module => ({ default: module.WorkingExperience })));
const JoinComponent = lazy(() => import('pages/home/HomeComponent4').then(module => ({ default: module.JoinComponent })));
const TrainingPrograms = lazy(() => import('pages/home/HomeComponent5').then(module => ({ default: module.TrainingPrograms })));
const ShortTermCourses = lazy(() => import('pages/home/HomeComponent6').then(module => ({ default: module.ShortTermCourses })));
const UpskillKnowledge = lazy(() => import('pages/home/HomeComponent7').then(module => ({ default: module.UpskillKnowledge })));
const TrainerProgram = lazy(() => import('pages/home/HomeComponent8').then(module => ({ default: module.TrainerProgram })));
const YoungTalent = lazy(() => import('pages/home/HomeComponent9').then(module => ({ default: module.YoungTalent })));
const JobAssistance = lazy(() => import('pages/home/HomeComponent10').then(module => ({ default: module.JobAssistance })));
const TrainingPerks = lazy(() => import('pages/home/HomeComponent11').then(module => ({ default: module.TrainingPerks })));
const Placements = lazy(() => import('pages/home/HomeComponent12').then(module => ({ default: module.Placements })));

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
      <TrainerProgram/>
      <YoungTalent/>
      <JobAssistance/>
      <TrainingPerks/>
      <Placements/>
    </Suspense>
  )
})
