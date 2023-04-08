import React,{Suspense,lazy} from "react";
import { Routes, Route } from "react-router-dom";

const ErrorLogger = lazy(() => import('components/ErrorLogger').then(module => ({ default: module.ErrorLogger })));
const FallbackLoader = lazy(() => import('components/Loaders').then(module => ({ default: module.FallbackLoader })));
const Header = lazy(() => import('layout/header').then(module => ({ default: module.Header })));
const Footer = lazy(() => import('layout/footer').then(module => ({ default: module.Footer })));
const HomePage = lazy(() => import('pages/home/Home').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('pages/about/About').then(module => ({ default: module.AboutPage })));
const DevopsPage = lazy(() => import('pages/courses/devops/Devops').then(module => ({ default: module.DevopsPage })));
const ContactPage = lazy(() => import('pages/contact/Contact').then(module => ({ default: module.ContactPage })));

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
          <Route path="/java-full-stack-course" element={<DevopsPage/>}/>
          <Route path="/data-science-and-machine-learning-course" element={<DevopsPage/>}/>
          <Route path="/full-stack-web-development-course" element={<DevopsPage/>}/>
          <Route path="/cloud-computing-and-devops-course" element={<DevopsPage/>}/>
          <Route path="/train-the-trainer-program" element={<DevopsPage/>}/>
          <Route path="/programming-fundamentals-course" element={<DevopsPage/>}/>
          <Route path="/java-programming-course" element={<DevopsPage/>}/>
          <Route path="/python-programming-course" element={<DevopsPage/>}/>
          <Route path="/mysql-database-course" element={<DevopsPage/>}/>
          <Route path="/linux-and-aws-course" element={<DevopsPage/>}/>
          <Route path="/html-css-javascript-course" element={<DevopsPage/>}/>
          <Route path="/wordpress-and-blogging-course" element={<DevopsPage/>}/>
          <Route path="/google-ads-course" element={<DevopsPage/>}/>
          <Route path="/social-media-marketing-course" element={<DevopsPage/>}/>
          <Route path="/search-engine-optimization-course" element={<DevopsPage/>}/>
          <Route path="/content-marketing-course" element={<DevopsPage/>}/>
          <Route path="/affiliate-marketing-course" element={<DevopsPage/>}/>
        </Routes>
        <Footer />
      </Suspense>
    </ErrorLogger>
  );
});
