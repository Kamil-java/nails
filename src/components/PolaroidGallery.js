import React, { useState } from "react";
import Modal from "./Modal"; // import the Modal component
import "./PolaroidGallery.css";

const PolaroidGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9z5M9F8fIYi7c2lOTSEEfrWpZbMWTE7HxeQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Lf41U-dLujaqmfcQvOTBu4pI6j7EgQxfqQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9z5M9F8fIYi7c2lOTSEEfrWpZbMWTE7HxeQ&s",
  ];

  const handleShow = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="polaroid-gallery">
      {images.map((image, index) => (
        <div key={index} className="polaroid" onClick={() => handleShow(image)}>
          <img
            src={image}
            alt={`Stylizacja ${index + 1}`}
            className="polaroid-image"
          />
          <div className="caption">Stylizacja {index + 1}</div>
        </div>
      ))}
      <Modal show={showModal} handleClose={handleClose} image={selectedImage} />
    </div>
  );
};

export default PolaroidGallery;
