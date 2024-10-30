import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      id: 1,
      name: "Manicure Hybrydowy",
      description: "Trwała stylizacja paznokci, odporna na zarysowania.",
    },
    {
      id: 2,
      name: "Pedicure",
      description: "Kompleksowa pielęgnacja stóp i paznokci.",
    },
    {
      id: 3,
      name: "Stylizacja Paznokci",
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
    },
    {
      id: 4,
      name: "Stylizacja Paznokci",
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
    },
    {
      id: 5,
      name: "Stylizacja Paznokci",
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
    },
    {
      id: 6,
      name: "Stylizacja Paznokci",
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
    },
    {
      id: 7,
      name: "Stylizacja Paznokci",
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Nasze Usługi</h2>
      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-md-6 mb-4">
            <div
              className="p-3 text-center service-card"
              onClick={() => navigate(`/service/${service.id}`)}
            >
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
