import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ReservationCalendar.css";
import { Modal, Button, Toast } from "react-bootstrap";

const ReservationCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [rodoChecked, setRodoChecked] = useState(false);
  const [reservations, setReservations] = useState(() => {
    const savedReservations = localStorage.getItem("reservations");
    return savedReservations ? JSON.parse(savedReservations) : [];
  });
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [toast, setToast] = useState({
    message: "",
    visible: false,
  });

  const services = [
    { name: "Manicure", duration: 1 },
    { name: "Pedicure", duration: 1.5 },
    { name: "Masaż twarzy", duration: 1 },
    { name: "Oczyszczanie twarzy", duration: 2 },
    { name: "Peeling chemiczny", duration: 1.5 },
  ];

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const isValidTimeSlot = (reservationTime) => {
    const selectedServiceDetails = services.find(
      (service) => service.name === selectedService
    );

    if (!selectedServiceDetails) {
      showToast("Proszę wybrać zabieg.");
      return false;
    }

    const reservationDateTime = new Date(
      `${date.toLocaleDateString()} ${reservationTime}`
    );

    const hour = reservationDateTime.getHours();
    if (hour < 8 || hour >= 18) {
      showToast("Wizyty można umawiać tylko między 8:00 a 18:00.");
      return false;
    }

    for (const res of reservations) {
      const existingResDate = new Date(
        `${res.date.split(" at ")[0]} ${res.date.split(" at ")[1]}`
      );
      const timeDiff = Math.abs(
        (reservationDateTime - existingResDate) / (1000 * 60 * 60)
      );
      if (timeDiff < selectedServiceDetails.duration) {
        showToast(
          `Wizyty muszą być oddzielone o czas trwania wybranego zabiegu: ${selectedServiceDetails.duration} godz.`
        );
        return false;
      }
    }

    return true;
  };

  const handleReserve = () => {
    if (!rodoChecked) {
      showToast("Musisz zaakceptować klauzulę RODO.");
      return;
    }

    if (!time || !isValidTimeSlot(time)) {
      return;
    }

    setShowConfirmModal(true); // Show confirmation modal
  };

  const confirmReservation = () => {
    const formattedDate = date.toLocaleDateString();
    const reservationDateTime = `${formattedDate} at ${time}`;
    const reservationDetails = {
      name: `${firstName} ${lastName}`,
      contact,
      service: selectedService,
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
    setShowConfirmModal(false); // Hide confirmation modal
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

  const tileDisabled = ({ date }) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Disable weekends
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
            <label htmlFor="service" className="form-label">
              Wybierz zabieg:
            </label>
            <select
              id="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="form-control"
            >
              <option value="">-- Wybierz zabieg --</option>
              {services.map((service, index) => (
                <option key={index} value={service.name}>
                  {`${service.name} (Czas trwania: ${service.duration} godz.)`}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rodoCheck"
              checked={rodoChecked}
              onChange={(e) => setRodoChecked(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="rodoCheck">
              Akceptuję klauzulę RODO
            </label>
          </div>
        </form>
        <div className="time-selector mt-3">
          <label htmlFor="time">Wybierz godzinę:</label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="form-control"
          >
            <option value="">-- Wybierz godzinę --</option>
            {[...Array(22).keys()].map((index) => {
              const hour = 8 + Math.floor(index / 2);
              const minutes = index % 2 === 0 ? "00" : "30";
              return (
                <option key={index} value={`${hour}:${minutes}`}>
                  {`${hour}:${minutes}`}
                </option>
              );
            })}
          </select>
        </div>
        <button onClick={handleReserve} className="btn btn-primary mt-3">
          Zarezerwuj
        </button>

        <h3 className="mt-4">Twoje rezerwacje:</h3>
        <ul>
          {reservations.map((reservation, index) => (
            <li key={index}>
              {reservation.date} - {reservation.name} ({reservation.service})
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
          tileDisabled={tileDisabled}
        />
      </div>

      {toast.visible && (
        <Toast
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 9999,
          }}
          onClose={() => setToast({ ...toast, visible: false })}
        >
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      )}

      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Potwierdzenie rezerwacji</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Czy jesteś pewien, że chcesz zarezerwować ten termin?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            Anuluj
          </Button>
          <Button variant="primary" onClick={confirmReservation}>
            Potwierdź
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReservationCalendar;
