import React,{Suspense,lazy, useEffect, useState} from 'react'
import { useHookstate } from "@hookstate/core"
import { PAGE_STATE } from "globalStore/globalState";

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
const StudentReviews = lazy(() => import('pages/home/HomeComponent13').then(module => ({ default: module.StudentReviews })));

export const HomePage = React.memo(() => {
  const [mobile, setMobile] = useState(false);
  const { pageVisiblity } = useHookstate(PAGE_STATE)

  const handleResize = () => {
    if (window.innerWidth < 990) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    pageVisiblity.set(false)
  },[])

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  
  return (
    <Suspense fallback={<FallbackLoader/>}>
      <LandingPage mobileDetector={mobile}/>
      <ProfessionalJourney mobileDetector={mobile}/>
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
      <StudentReviews/>
    </Suspense>
  )
})
