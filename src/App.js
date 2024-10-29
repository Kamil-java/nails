import React, { useState } from "react";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ServiceDetail from "./components/ServiceDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [selectedService, setSelectedService] = useState(null);

  // Funkcja obsługi kliknięcia, która ustawia wybraną usługę
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  // Funkcja powrotu do głównego widoku
  const handleBackToMain = () => {
    setSelectedService(null);
  };

  return (
    <div className="App">
      <Header />
      {selectedService ? (
        // Widok szczegółów usługi
        <ServiceDetail service={selectedService} onBack={handleBackToMain} />
      ) : (
        // Widok główny z usługami i formularzem kontaktowym
        <>
          <Services onServiceClick={handleServiceClick} />
          <Contact />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
