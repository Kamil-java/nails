import React from "react";
import "./CostEstimate.css";

const CostEstimate = () => {
  const services = [
    { id: 1, name: "Manicure", price: "40 PLN" },
    {
      id: 2,
      name: "Manicure z malowaniem klasycznym lakierem",
      price: "70 PLN",
    },
    { id: 3, name: "Manicure hybrydowy", price: "100 PLN" },
    { id: 4, name: "Manicure żelowy", price: "115 PLN" },
    { id: 5, name: "Przedłużanie żelowe", price: "140 PLN" },
    { id: 6, name: "Przedłużanie akrylożelowe", price: "150 PLN" },
    { id: 7, name: "French", price: "10 PLN" },
  ];

  return (
    <div className="cost-estimate">
      <h2 className="text-center">Kosztorysy Usług</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Usługa</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CostEstimate;
