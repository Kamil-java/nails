import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServiceDetails.css";
import PolaroidGallery from "./PolaroidGallery";

function ServiceDetail() {
  const location = useLocation();
  const service = location.state; // Get the passed service data

  return (
    <div className="container my-5">
      <div className="row">
        {/* Left column for text */}
        <div className="col-md-6 mb-4">
          <h2>{service.name}</h2>
          <p>
            <strong>Cena:</strong> {service.price} zł
          </p>
          <p>
            <strong>Czas realizacji:</strong> 2h
          </p>
          <p>{service.description}</p>
        </div>

        {/* Right column for carousel */}
        <div className="col-md-6">
          <PolaroidGallery props={service.images} />
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
