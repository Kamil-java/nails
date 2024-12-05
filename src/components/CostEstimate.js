import React from "react";
import "./CostEstimate.css";

const CostEstimate = () => {
  const services = [
    { id: 1, name: "Manicure Damski", price: "60 PLN" },
    { id: 2, name: "Manicure Męski", price: "60 PLN" },
    { id: 2, name: "Manicure Akrylożelowy", price: "130 PLN" },
    { id: 2, name: "Manicure Malowany Lakierem Klasycznym", price: "70 PLN" },
    { id: 3, name: "Manicure Hybrydowy", price: "95 PLN" },
    { id: 4, name: "Manicure Żelowy", price: "100 PLN" },
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
