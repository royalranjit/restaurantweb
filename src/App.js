import React from "react";
import "./App.css";
import Navbar from "./components/Layout/header";
import { Footer } from "./components/Layout/footer";
import { Route, Routes } from "react-router-dom";
import About from "./container/About";
import Home from "./container/home";
import OurMenu from "./container/OurMenu";
import OurService from "./container/OurService";
import AllergyAdvice from "./container/ALLERGY ADVICE";
import PageNotFound from "./utils/noPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourMenu" element={<OurMenu />} />
        <Route path="/ourService" element={<OurService />} />
        <Route path="/allergy" element={<AllergyAdvice />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
