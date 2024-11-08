import React, { useState } from "react";
import Modal from "./Modal"; // import the Modal component
import "./PolaroidGallery.css";

const PolaroidGallery = ({ props }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const images = props;

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
