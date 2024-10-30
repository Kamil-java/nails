import React from "react";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceDetail from "./components/ServiceDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import PolaroidGallery from "./components/PolaroidGallery";
import ReservationCalendar from "./components/ReservationCalendar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/polaroidgallery" element={<PolaroidGallery />} />
          <Route path="/calendar" element={<ReservationCalendar />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
