import React, { useState } from "react";

function ServiceDetail({ service, onBack }) {
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/340",
    "https://via.placeholder.com/300",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <section className="container my-5">
      <button onClick={onBack} className="btn btn-secondary mb-4">
        Wróć do usług
      </button>
      <h2 className="text-center mb-4">{service.name}</h2>
      <p className="text-center">{service.description}</p>

      <div className="text-center">
        <button onClick={prevImage} className="btn btn-primary me-2">
          Poprzednie
        </button>
        <img
          src={images[currentIndex]}
          alt={`Zdjęcie ${currentIndex + 1}`}
          className="img-fluid"
        />
        <button onClick={nextImage} className="btn btn-primary ms-2">
          Następne
        </button>
      </div>
    </section>
  );
}

export default ServiceDetail;
