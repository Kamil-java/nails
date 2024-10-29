import React from "react";

function Contact() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Kontakt</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Imię i nazwisko
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Wiadomość
          </label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Wyślij
        </button>
      </form>
    </section>
  );
}

export default Contact;
