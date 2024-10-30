import React from "react";
import "./CostEstimate.css";

const CostEstimate = () => {
  const services = [
    { id: 1, name: "Manicure", price: "50 PLN" },
    { id: 2, name: "Pedicure", price: "70 PLN" },
    { id: 3, name: "Gel Nails", price: "100 PLN" },
    { id: 4, name: "Nail Art", price: "80 PLN" },
    { id: 5, name: "Waxing", price: "40 PLN" },
    { id: 6, name: "Facial Treatment", price: "150 PLN" },
    { id: 7, name: "Massage", price: "200 PLN" },
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
