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
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/cloud-computing-and-devops-course" element={<DevopsPage/>}/>
        </Routes>
        <Footer />
      </Suspense>
    </ErrorLogger>
  );
});
