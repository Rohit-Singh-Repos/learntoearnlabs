import React from "react";
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
    // headingText,
    // primaryButtonText,
    // outlinedButtonText,
    inputSchemas,
  }) => {
    return (
      <>
        <LandingPage sectionData={sectionData}/>
        <CloudDevopsCareer sectionData={sectionData} />
        <TrainingRoadMap sectionData={sectionData} />
        <CareerOptions sectionData={sectionData} />
        <CloudDevopsTraining sectionData={sectionData} />
        <WhoCanJoin sectionData={sectionData} />
        <TrainingMode sectionData={sectionData} />
        <ProgramDetails sectionData={sectionData} inputSchemas={inputSchemas} />
        <ApplyNow sectionData={sectionData} inputSchemas={inputSchemas}/>
      </>
    );
  }
);
