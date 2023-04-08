import React,{Suspense,lazy} from "react";
import { Routes, Route } from "react-router-dom";

const ErrorLogger = lazy(() => import('components/ErrorLogger').then(module => ({ default: module.ErrorLogger })));
const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const Header = lazy(() => import('layout/header').then(module => ({ default: module.Header })));
const Footer = lazy(() => import('layout/footer').then(module => ({ default: module.Footer })));
const HomePage = lazy(() => import('pages/home/Home').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('pages/about/About').then(module => ({ default: module.AboutPage })));
const JavaFullStack = lazy(() => import('pages/courses/javaFullStack/JavaFullStack').then(module => ({ default: module.JavaFullStack })));
const DataScience = lazy(() => import('pages/courses/dataScience/DataScience').then(module => ({ default: module.DataScience })));
const FullStackWebDevelopment = lazy(() => import('pages/courses/fullStack/FullStackWebDevlopment').then(module => ({ default: module.FullStackWebDevelopment })));
const DevopsPage = lazy(() => import('pages/courses/devops/Devops').then(module => ({ default: module.DevopsPage })));
const TrainTheTrainerProgram = lazy(() => import('pages/courses/trainTheTrainer/TrainTheTrainer').then(module => ({ default: module.TrainTheTrainerProgram })));
const DesignThinking = lazy(() => import('pages/courses/designThinking/DesignThinking').then(module => ({ default: module.DesignThinking })));
const ProgramingFundamentals = lazy(() => import('pages/courses/programmingFundamentals/ProgramingFundamentals').then(module => ({ default: module.ProgramingFundamentals })));
const JavaCourse = lazy(() => import('pages/courses/java/Java').then(module => ({ default: module.JavaCourse })));
const PythonCourse = lazy(() => import('pages/courses/python/Python').then(module => ({ default: module.PythonCourse })));
const MySQLDatabase = lazy(() => import('pages/courses/mySQLDatabase/MySQLDatabase').then(module => ({ default: module.MySQLDatabase })));
const LinuxAndAWS = lazy(() => import('pages/courses/linuxAndAws/LinuxAndAws').then(module => ({ default: module.LinuxAndAWS })));
const HtmlCssJsCourse = lazy(() => import('pages/courses/htmlCssJs/HtmlCssJs').then(module => ({ default: module.HtmlCssJsCourse })));
const WordpressAndBlogging = lazy(() => import('pages/courses/wordpressAndBlogging/WordpressAndBlogging').then(module => ({ default: module.WordpressAndBlogging })));
const GoogldAdsCourse = lazy(() => import('pages/courses/googleAds/GoogleAds').then(module => ({ default: module.GoogldAdsCourse })));
const SocialMediaMarketing = lazy(() => import('pages/courses/socialMediaMarketing/SocialMediaMarketing').then(module => ({ default: module.SocialMediaMarketing })));
const SearchEngineOptimization = lazy(() => import('pages/courses/searchEngineOptimization/SearchEngineOptimizaton').then(module => ({ default: module.SearchEngineOptimization })));
const ContentMarketingCourse = lazy(() => import('pages/courses/contentMarketing/ContentMarketing').then(module => ({ default: module.ContentMarketingCourse })));
const AffiliateMarketingCourse = lazy(() => import('pages/courses/affiliateMarketing/AffiliateMarketing').then(module => ({ default: module.AffiliateMarketingCourse })));
const ContactPage = lazy(() => import('pages/contact/Contact').then(module => ({ default: module.ContactPage })));
const ErrorPage = lazy(() => import('pages/404/404Page').then(module => ({ default: module.ErrorPage })));

export const Layout = React.memo(() => {
  return (
    <ErrorLogger>
      <Suspense fallback={<FallbackLoader/>}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about-us" element={<AboutPage/>}/>
          <Route path="/contact-us" element={<ContactPage/>}/>
          <Route path="/practise" element={<ContactPage/>}/>
          <Route path="/full-stack-engineer-course" element={<ContactPage/>}/>
          <Route path="/digital-marketing-course" element={<ContactPage/>}/>
          <Route path="/java-full-stack-course" element={<JavaFullStack/>}/>
          <Route path="/data-science-and-machine-learning-course" element={<DataScience/>}/>
          <Route path="/full-stack-web-development-course" element={<FullStackWebDevelopment/>}/>
          <Route path="/cloud-computing-and-devops-course" element={<DevopsPage/>}/>
          <Route path="/train-the-trainer-program" element={<TrainTheTrainerProgram/>}/>
          <Route path="/design-thinking-and-ui-ux-course" element={<DesignThinking/>}/>
          <Route path="/programming-fundamentals-course" element={<ProgramingFundamentals/>}/>
          <Route path="/java-programming-course" element={<JavaCourse/>}/>
          <Route path="/python-programming-course" element={<PythonCourse/>}/>
          <Route path="/mysql-database-course" element={<MySQLDatabase/>}/>
          <Route path="/linux-and-aws-course" element={<LinuxAndAWS/>}/>
          <Route path="/html-css-javascript-course" element={<HtmlCssJsCourse/>}/>
          <Route path="/c-programming-course" element={<DevopsPage/>}/>
          <Route path="/cpp-programming-course" element={<DevopsPage/>}/>
          <Route path="/data-structure-and-algorithm-course" element={<DevopsPage/>}/>
          <Route path="/power-bi-course" element={<DevopsPage/>}/>
          <Route path="/mentorship-program" element={<DevopsPage/>}/>
          <Route path="/wordpress-and-blogging-course" element={<WordpressAndBlogging/>}/>
          <Route path="/google-ads-course" element={<GoogldAdsCourse/>}/>
          <Route path="/social-media-marketing-course" element={<SocialMediaMarketing/>}/>
          <Route path="/search-engine-optimization-course" element={<SearchEngineOptimization/>}/>
          <Route path="/content-marketing-course" element={<ContentMarketingCourse/>}/>
          <Route path="/affiliate-marketing-course" element={<AffiliateMarketingCourse/>}/>
          <Route path="/claim-cashback" element={<DevopsPage/>}/>
          <Route path="/verify-certificate" element={<DevopsPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer />
      </Suspense>
    </ErrorLogger>
  );
});
