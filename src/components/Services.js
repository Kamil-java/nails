import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      id: 1,
      name: "Manicure żelowy",
      price: 100.0,
      description: "Do dodania",
      images: [
        `${process.env.PUBLIC_URL}/assets/Żel_1.jpg`,
        `${process.env.PUBLIC_URL}/assets/Żel_2.jpg`,
        `${process.env.PUBLIC_URL}/assets/Żel_3.jpg`,
      ],
    },
    {
      id: 3,
      name: "Manicure hybrydowy",
      price: 95.0,
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
      images: [
        `${process.env.PUBLIC_URL}/assets/Hybryda_1.jpg`,
        `${process.env.PUBLIC_URL}/assets/Hybryda_2.jpg`,
        `${process.env.PUBLIC_URL}/assets/Hybryda_3.jpg`,
      ],
    },
    {
      id: 4,
      name: "Manicure Akrylożelowy",
      price: 130.0,
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
      images: [
        `${process.env.PUBLIC_URL}/assets/AkryloŻel_1.jpg`,
        `${process.env.PUBLIC_URL}/assets/AkryloŻel_2.jpg`,
        `${process.env.PUBLIC_URL}/assets/AkryloŻel_5.jpg`,
      ],
    },
    {
      id: 5,
      name: "Manicure Malowany Lakierem Klasycznym",
      price: 70.0,
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
      images: [],
    },
    {
      id: 6,
      name: "Manicure",
      price: 60.0,
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
      images: [],
    },
    {
      id: 7,
      name: "Manicure męski",
      price: 60.0,
      description: "Oryginalne wzory i artystyczne projekty paznokci.",
      images: [],
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const hour = new Date().getHours();
    const container = document.querySelector(".container-leaves");
    const gradientStart = `rgba(255, 229, 180, ${1 - (hour - 6) / 12})`; // Change opacity based on hour
    const gradientEnd = `rgba(255, 255, 255, 1)`;
    container.style.background = `linear-gradient(to bottom, ${gradientStart}, ${gradientEnd})`;
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
