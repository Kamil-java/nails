import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ReservationCalendar.css";
import Toast from "react-bootstrap/Toast";

const ReservationCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [note, setNote] = useState("");
  const [reservations, setReservations] = useState(() => {
    const savedReservations = localStorage.getItem("reservations");
    return savedReservations ? JSON.parse(savedReservations) : [];
  });

  const [toast, setToast] = useState({
    message: "",
    visible: false,
  });

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleReserve = () => {
    const formattedDate = date.toLocaleDateString();
    const reservationDateTime = `${formattedDate} at ${time}`;
    const reservationDetails = {
      name: `${firstName} ${lastName}`,
      contact,
      note,
      date: reservationDateTime,
    };

    const reservationExists = reservations.some(
      (res) =>
        res.date === reservationDateTime && res.name === reservationDetails.name
    );

    if (!reservationExists) {
      const newReservations = [...reservations, reservationDetails];
      setReservations(newReservations);
      localStorage.setItem("reservations", JSON.stringify(newReservations));
      showToast(`Rezerwacja na ${reservationDateTime} została potwierdzona!`);
    } else {
      showToast(`Data ${reservationDateTime} jest już zarezerwowana!`);
    }
  };

  const handleDelete = (reservation) => {
    const newReservations = reservations.filter(
      (r) => r.date !== reservation.date || r.name !== reservation.name
    );
    setReservations(newReservations);
    localStorage.setItem("reservations", JSON.stringify(newReservations));
    showToast(`Rezerwacja na ${reservation.date} została usunięta.`);
  };

  const showToast = (message) => {
    setToast({ message, visible: true });
    setTimeout(() => {
      setToast({ ...toast, visible: false });
    }, 5000);
  };

  const tileClassName = ({ date }) => {
    const formattedDate = date.toLocaleDateString();
    return reservations.some((reservation) =>
      reservation.date.startsWith(formattedDate)
    )
      ? "reserved"
      : null;
  };

  return (
    <div
      className="reservation-calendar"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="form-container"
        style={{
          width: "50rem",
          padding: "20px",
          marginRight: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 className="text-center">Rezerwuj Termin</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Imię:
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Nazwisko:
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Telefon/Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="note" className="form-label">
              Notatka:
            </label>
            <textarea
              className="form-control"
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>
        </form>
        <div className="time-selector mt-3">
          <label htmlFor="time">Wybierz godzinę:</label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">-- Wybierz godzinę --</option>
            {[...Array(24).keys()].map((hour) => (
              <option key={hour} value={`${hour}:00`}>{`${hour}:00`}</option>
            ))}
          </select>
        </div>
        <button onClick={handleReserve} className="btn btn-primary mt-3">
          Zarezerwuj
        </button>

        <h3 className="mt-4">Twoje rezerwacje:</h3>
        <ul>
          {reservations.map((reservation, index) => (
            <li key={index}>
              {reservation.date} - {reservation.name}
              <button
                className="btn btn-danger btn-sm ms-2"
                onClick={() => handleDelete(reservation)}
              >
                Usuń
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="calendar-container"
        style={{
          width: "400px",
          padding: "40px 20px 20px 20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={tileClassName}
          style={{ width: "100%", height: "auto" }}
        />
        {toast.visible && (
          <Toast>
            <Toast.Body>{toast.message}</Toast.Body>
          </Toast>
        )}
      </div>
    </div>
  );
};

export default ReservationCalendar;
