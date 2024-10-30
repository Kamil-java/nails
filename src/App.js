import React, { useState } from "react";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceDetail from "./components/ServiceDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
