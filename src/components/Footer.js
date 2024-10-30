import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-light text-center text-lg-start mt-auto">
      <div className="container p-2">
        <section className="mb-2">
          <h5 className="text-uppercase">Skontaktuj się z nami</h5>
          <p>
            Jesteśmy dostępni w każdy poniedziałek - sobotę od 9:00 do 20:00.
            Skontaktuj się z nami, aby umówić się na wizytę!
          </p>
        </section>
        <section className="mb-2">
          <h5 className="text-uppercase">Media społecznościowe</h5>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="me-2 text-reset"
          >
            <i className="fab fa-facebook-f"></i> {/* Ikona Facebooka */}
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="me-2 text-reset"
          >
            <i className="fab fa-instagram"></i> {/* Ikona Instagrama */}
          </a>
        </section>
      </div>
      <div className="text-center p-2 bg-light">
        © {new Date().getFullYear()} Twoja Firma - Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}

export default Footer;
