import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ServiceDetail() {
  const { id } = useParams();

  // Przykładowe dane
  const service = {
    id,
    name: "Stylizacja Paznokci",
    description: "Pełny opis usługi, dostosowany do wybranej stylizacji.",
    price: "150 zł",
    images: [
      "https://via.placeholder.com/800x400?text=Stylizacja+1",
      "https://via.placeholder.com/800x400?text=Stylizacja+2",
      "https://via.placeholder.com/800x400?text=Stylizacja+3",
    ],
  };

  return (
    <div className="container my-5">
      <h2>{service.name}</h2>
      <p>
        <strong>Cena:</strong> {service.price}
      </p>
      <p>{service.description}</p>
      <Carousel>
        {service.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ServiceDetail;
