import React from "react";
import "./PolaroidGallery.css";

const PolaroidGallery = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9z5M9F8fIYi7c2lOTSEEfrWpZbMWTE7HxeQ&s",
    "https://via.placeholder.com/300x400?text=Stylizacja+2",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Lf41U-dLujaqmfcQvOTBu4pI6j7EgQxfqQ&s",
    "https://via.placeholder.com/300x400?text=Stylizacja+4",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9z5M9F8fIYi7c2lOTSEEfrWpZbMWTE7HxeQ&s",
  ];

  return (
    <div className="polaroid-gallery">
      {images.map((image, index) => (
        <div key={index} className="polaroid">
          <img
            src={image}
            alt={`Stylizacja ${index + 1}`}
            className="polaroid-image"
          />
          <div className="caption">Stylizacja {index + 1}</div>
        </div>
      ))}
    </div>
  );
};

export default PolaroidGallery;
