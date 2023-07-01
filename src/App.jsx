import React from 'react'
import { Layout } from 'layout'
import { isMobile } from 'react-device-detect';
import { useHookstate } from '@hookstate/core';
import { MOBILE_DETECTOR } from 'globalStore/globalState';
import { useEffect } from 'react';

const App = React.memo(() => {
  const { mobileDetector } = useHookstate(MOBILE_DETECTOR);
  
  useEffect(() => {
    mobileDetector.set(isMobile)
  },[])

  return (
    <Layout/>
  )
})

export default App