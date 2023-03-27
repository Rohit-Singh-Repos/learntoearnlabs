import React from "react";
import { Header } from "layout/header";
import { Footer } from "layout/footer";
import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage } from "pages";

export const Layout = React.memo(() => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      <Footer />
    </>
  );
});
