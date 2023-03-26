import React from 'react'
import { LandingPage } from 'pages/home/HomeComponent1'
import { ProfessionalJourney } from 'pages/home/HomeComponent2'

export const HomePage = React.memo(() => {
  return (
    <>
      <LandingPage/>
      <ProfessionalJourney/>
    </>
  )
})
