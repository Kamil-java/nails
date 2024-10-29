import React from "react";
import { Carousel } from "react-bootstrap";

function Gallery() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Galeria</h2>
      <Carousel indicators={false} interval={3000} className="gallery-carousel">
        {/* Pierwszy slajd z trzema obrazami */}
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/300"
                alt="Stylizacja 1"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/300"
                alt="Stylizacja 2"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/300"
                alt="Stylizacja 3"
                className="img-fluid"
              />
            </div>
          </div>
        </Carousel.Item>

        {/* Drugi slajd z kolejnymi trzema obrazami */}
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/300"
                alt="Stylizacja 4"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/300"
                alt="Stylizacja 5"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/300"
                alt="Stylizacja 6"
                className="img-fluid"
              />
            </div>
          </div>
        </Carousel.Item>

        {/* Trzeci slajd z kolejnymi dwoma obrazami */}
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/300"
                alt="Stylizacja 7"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/300"
                alt="Stylizacja 8"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/300"
                alt="Stylizacja 9"
                className="img-fluid"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Gallery;
