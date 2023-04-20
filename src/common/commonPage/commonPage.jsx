import React, { useState, useEffect } from "react";
import { LandingPage } from "common/commonPage/CommonPageComponent1";
import { CloudDevopsCareer } from "common/commonPage/CommonPageComponent2";
import { TrainingRoadMap } from "common/commonPage/CommonPageComponent3";
import { CareerOptions } from "common/commonPage/CommonPageComponent4";
import { CloudDevopsTraining } from "common/commonPage/CommonPageComponent5";
import { WhoCanJoin } from "common/commonPage/CommonPageComponent6";
import { TrainingMode } from "common/commonPage/CommonPageComponent7";
import { ProgramDetails } from "common/commonPage/CommonPageComponent8";
import { ApplyNow } from "common/commonPage/CommonPageComponent9";

export const CommonPageComponent = React.memo(
  ({
    sectionData,
    inputSchemas,
  }) => {

    const { 
      landingPageSection,
      cloudDevopsCareerSection,
      trainingRoadmapSection,
      careerOptionSection,
      cloudDevopsTrainingSection,
      whoCanJoinSection,
      trainingModeSection,
      programDetailsSection,
      applyNowSection,
      guidanceSection
     } = sectionData
    const [mobile, setMobile] = useState(false);    
    const handleResize = () => {
      if (window.innerWidth < 990) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    useEffect(() => {
      window.addEventListener("resize", handleResize);
    });

    return (
      <>
        {landingPageSection && <LandingPage sectionData={sectionData} mobileDetector={mobile}/>}
        {cloudDevopsCareerSection && <CloudDevopsCareer sectionData={sectionData} />}
        {trainingRoadmapSection && <TrainingRoadMap sectionData={sectionData} mobileDetector={mobile}/>}
        {careerOptionSection && <CareerOptions sectionData={sectionData} mobileDetector={mobile}/>}
        {cloudDevopsTrainingSection && <CloudDevopsTraining sectionData={sectionData} mobileDetector={mobile}/>}
        {whoCanJoinSection && <WhoCanJoin sectionData={sectionData} />}
        {trainingModeSection && <TrainingMode sectionData={sectionData} mobileDetector={mobile}/>}
        {programDetailsSection && <ProgramDetails sectionData={sectionData} inputSchemas={inputSchemas} mobileDetector={mobile}/>}
        {/* {guidanceSection && } */}
        {applyNowSection && <ApplyNow sectionData={sectionData} inputSchemas={inputSchemas} mobileDetector={mobile}/>}
        
      </>
    );
  }
);
