import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      id: 1,
      name: "Manicure",
      price: 120.0,
      description: "Trwała stylizacja paznokci, odporna na zarysowania.",
      images: [
        `${process.env.PUBLIC_URL}/assets/1.jpeg`,
        `${process.env.PUBLIC_URL}/assets/2.jpeg`,
        `${process.env.PUBLIC_URL}/assets/3.jpeg`,
      ],
    },
    {
      id: 2,
      name: "Manicure z malowaniem klasycznym lakierem",
      description: "Kompleksowa pielęgnacja stóp i paznokci.",
      images: [],
    },
    {
      id: 3,
      name: "Manicure hybrydowy",
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
      images: [],
    },
    {
      id: 4,
      name: "Manicure żelowy",
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
      images: [],
    },
    {
      id: 5,
      name: "Przedłużanie żelowe",
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
      images: [],
    },
    {
      id: 6,
      name: "Przedłużanie akrylożelem",
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
      images: [],
    },
    {
      id: 7,
      name: "Ściągnięcie stylizacji",
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
      images: [],
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const hour = new Date().getHours();
    const container = document.querySelector(".container-leaves");

    if (hour >= 6 && hour < 19) {
      // Daytime: Use a gradient based on the sun's position
      const gradientStart = `rgba(255, 229, 180, ${1 - (hour - 6) / 12})`; // Change opacity based on hour
      const gradientEnd = `rgba(255, 255, 255, 1)`;
      container.style.background = `linear-gradient(to bottom, ${gradientStart}, ${gradientEnd})`;
    } else {
      // Nighttime: Dark background with stars
      container.style.backgroundColor = "#2C3E50"; // Dark color for night
      container.classList.add("stars"); // Add a class for stars effect
    }
  }, []);

  return (
    <section className="container-fluid container-leaves my-4">
      <h2 className="text-center mb-4">Nasze Usługi</h2>
      <div className="row justify-content-center">
        {services.map((service) => (
          <div key={service.id} className="col-md-5 mb-4">
            <div
              className="p-3 text-center service-card"
              onClick={() =>
                navigate(`/service/${service.id}`, { state: service })
              }
            >
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <span className="falling-leaf">🍂</span>
      <span className="falling-leaf">🍁</span>
      <span className="falling-leaf">🍃</span>
      <span className="falling-leaf">🍂</span>
      <span className="falling-leaf">🍁</span>
      <span className="falling-leaf">🍃</span>
      <span className="falling-leaf">🍂</span>
    </section>
  );
}

export default Services;
