import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { LandingPage } from "common/commonPage/CommonPageComponent1";
import { CloudDevopsCareer } from "common/commonPage/CommonPageComponent2";
import { TrainingRoadMap } from "common/commonPage/CommonPageComponent3";
import { CareerOptions } from "common/commonPage/CommonPageComponent4";
import { CloudDevopsTraining } from "common/commonPage/CommonPageComponent5";
import { WhoCanJoin } from "common/commonPage/CommonPageComponent6";
import { TrainingMode } from "common/commonPage/CommonPageComponent7";
import { ProgramDetails } from "common/commonPage/CommonPageComponent8";
import { ApplyNow } from "common/commonPage/CommonPageComponent9";
import { TechnologiesAndPlatform } from "common/commonPage/CommonPageComponent10";
import { GuidanceSection } from "common/commonPage/CommonPageComponent11";
import { CompanyPortfolio } from "common/commonPage/CommonPageComponent12";
import { JobOrientedPrograms } from "common/commonPage/CommonPageComponent13";
import { AvailablePrograms } from "./CommonPageComponent14";

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
      availableProgramsSection,
      cloudDevopsTrainingSection,
      whoCanJoinSection,
      trainingModeSection,
      programDetailsSection,
      technologiesAndPlatforms,
      applyNowSection,
      guidanceSection,
      companyPortfolio,
      jobOrientedPrograms
     } = sectionData
    const { pathname } = useLocation()
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
    },[]);

    const courseDetector = useMemo(() => {
      if(pathname === "/full-stack-engineer-course"){
        return "Full Stack Engineer"
      }else if(pathname === "/digital-marketing-course"){
        return "Digital Marketing"
      }else if(pathname === "/java-full-stack-course"){
        return "Java Full Stack"
      }else if(pathname === "/data-science-and-machine-learning-course"){
        return "Data Science & Machine Learning"
      }else if(pathname === "/full-stack-web-development-course"){
        return "Full Stack Web Development"
      }else if(pathname === "/cloud-computing-and-devops-course"){
        return "Cloud Computing & Devops"
      }else if(pathname === "/train-the-trainer-program"){
        return "Train the Trainer"
      }else if(pathname === "/design-thinking-and-ui-ux-course"){
        return "Design Thinking and UI UX"
      }else if(pathname === "/programming-fundamentals-course"){
        return "Programming Fundamentals"
      }else if(pathname === "/java-programming-course"){
        return "Java Programming"
      }else if(pathname === "/python-programming-course"){
        return "Python Programming"
      }else if(pathname === "/mysql-database-course"){
        return "MySQL Database"
      }else if(pathname === "/linux-and-aws-course"){
        return "Linux & AWS"
      }else if(pathname === "/html-css-javascript-course"){
        return "HTML CSS and JavaScript"
      }else if(pathname === "/c-programming-course"){
        return "C Programming"
      }else if(pathname === "/cpp-programming-course"){
        return "C++ Programming"
      }else if(pathname === "/data-structure-and-algorithm-course"){
        return "Data Structure"
      }else if(pathname === "/power-bi-course"){
        return "Power BI"
      }else if(pathname === "/mentorship-program"){
        return "Mentorship Program"
      }else if(pathname === "/wordpress-and-blogging-course"){
        return "Wordpress and Blogging"
      }else if(pathname === "/google-ads-course"){
        return "Google Ads"
      }else if(pathname === "/social-media-marketing-course"){
        return "Social Media Marketing"
      }else if(pathname === "/search-engine-optimization-course"){
        return "Search Engine Optimization"
      }else if(pathname === "/content-marketing-course"){
        return "Content Marketing"
      }else if(pathname === "/affiliate-marketing-course"){
        return "Affiliate Marketing"
      }else{
        return "No Data"
      }
    },[pathname])

    return (
      <>
        {landingPageSection && <LandingPage sectionData={sectionData} mobileDetector={mobile}/>}
        {cloudDevopsCareerSection && <CloudDevopsCareer sectionData={sectionData} mobileDetector={mobile}/>}
        {trainingRoadmapSection && <TrainingRoadMap sectionData={sectionData} mobileDetector={mobile}/>}
        {careerOptionSection && <CareerOptions sectionData={sectionData} mobileDetector={mobile}/>}
        {availableProgramsSection && <AvailablePrograms sectionData={availableProgramsSection}/>}
        {cloudDevopsTrainingSection && <CloudDevopsTraining sectionData={sectionData} mobileDetector={mobile}/>}
        {whoCanJoinSection && <WhoCanJoin sectionData={sectionData} />}
        {trainingModeSection && <TrainingMode sectionData={sectionData} mobileDetector={mobile}/>}
        {programDetailsSection && <ProgramDetails sectionData={sectionData} inputSchemas={inputSchemas} mobileDetector={mobile} courseDetector={courseDetector}/>}
        {guidanceSection && <GuidanceSection sectionData={guidanceSection}/>}
        {technologiesAndPlatforms && <TechnologiesAndPlatform sectionData={technologiesAndPlatforms}/>}
        {applyNowSection && <ApplyNow sectionData={sectionData} inputSchemas={inputSchemas} mobileDetector={mobile} courseDetector={courseDetector}/>}
        {companyPortfolio && <CompanyPortfolio sectionData={companyPortfolio}/>}
        {jobOrientedPrograms && <JobOrientedPrograms sectionData={jobOrientedPrograms}/>}
      </>
    );
  }
);
