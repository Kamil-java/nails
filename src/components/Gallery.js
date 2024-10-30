import React from "react";
import Masonry from "react-masonry-css";
import "./Gallery.css"; // Create/update this CSS file

function Gallery() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4O3BsnCHclQ8tXljMDSfWeu1bO3kkvBfSw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwZsaLzXWH3ODMeIwNCM2yMmEA996QOsOyQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9z5M9F8fIYi7c2lOTSEEfrWpZbMWTE7HxeQ&s",
    "https://via.placeholder.com/1920x1080?text=Stylizacja+4",
    "https://via.placeholder.com/1920x1080?text=Stylizacja+5",
  ];

  return (
    <section className="gallery-container">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt={`Stylizacja ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </Masonry>
    </section>
  );
}

export default Gallery;
