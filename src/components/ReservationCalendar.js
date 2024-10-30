import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ReservationCalendar.css";

const ReservationCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [reservations, setReservations] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleReserve = () => {
    const formattedDate = date.toLocaleDateString();
    setReservations([...reservations, formattedDate]);
    alert(`Rezerwacja na ${formattedDate} została potwierdzona!`);
  };

  return (
    <div className="reservation-calendar">
      <h2 className="text-center">Rezerwuj Termin</h2>
      <Calendar onChange={handleDateChange} value={date} />
      <button onClick={handleReserve} className="btn btn-primary mt-3">
        Zarezerwuj
      </button>
      <h3 className="mt-4">Twoje rezerwacje:</h3>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>{reservation}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationCalendar;
