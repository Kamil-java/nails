import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <ul className="nav nav-underline justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallery">
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/price">
            Price
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/calendar">
            Reservation Calendar
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about_me">
            About Me
          </Link>
        </li>
      </ul>
      <header className="bg-light-pink text-white text-center p-3">
        <h1 style={{ color: "black" }}>Paznokciowa Bohemia</h1>
        <p style={{ color: "black" }}>
          Profesjonalne usługi manicure i pedicure. Martyna Birlet
        </p>
      </header>
    </div>
  );
}

export default Header;
