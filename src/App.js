import React from "react";
import "./App.css";
import Navbar from "./components/Layout/header";
import { Footer } from "./components/Layout/footer";
import { Route, Routes } from "react-router-dom";
import NoPage from "./utils/noPage";
import About from "./container/About";
import Home from "./container/home";
import OurMenu from "./container/OurMenu";
import OurService from "./container/OurService";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/OurMenu" element={<OurMenu />} />
        <Route path="/OurService" element={<OurService />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
