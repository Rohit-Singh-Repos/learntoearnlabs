import React from 'react'
import { LandingPage } from 'pages/home/HomeComponent1'
import { ProfessionalJourney } from 'pages/home/HomeComponent2'
import { WorkingExperience } from 'pages/home/HomeComponent3'
import { JoinComponent } from 'pages/home/HomeComponent4';


export const HomePage = React.memo(() => {
  return (
    <>
      <LandingPage/>
      <ProfessionalJourney/>
      <WorkingExperience/>
      <JoinComponent/>
    </>
  )
})
