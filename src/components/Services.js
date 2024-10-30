import React from "react";
import "./Services.css";

function Services({ onServiceClick }) {
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
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Nasze Usługi</h2>
      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-md-6 mb-4">
            <div
              className="p-3 text-center service-card"
              onClick={() => onServiceClick(service)}
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
