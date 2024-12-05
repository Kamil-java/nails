import React from "react";
import Masonry from "react-masonry-css";
import "./Gallery.css"; // Create/update this CSS file

function Gallery() {
  const images = [
    `${process.env.PUBLIC_URL}/assets/Żel_0.jpg`,
    `${process.env.PUBLIC_URL}/assets/Żel_1.jpg`,
    `${process.env.PUBLIC_URL}/assets/Żel_2.jpg`,
    `${process.env.PUBLIC_URL}/assets/Żel_3.jpg`,
    `${process.env.PUBLIC_URL}/assets/Żel_4.jpg`,
    `${process.env.PUBLIC_URL}/assets/Żel_5.jpg`,
    `${process.env.PUBLIC_URL}/assets/Żel_6.jpg`,
    `${process.env.PUBLIC_URL}/assets/Żel_7.jpg`,
    `${process.env.PUBLIC_URL}/assets/Żel_8.jpg`,
    `${process.env.PUBLIC_URL}/assets/Żel_9.jpg`,
    `${process.env.PUBLIC_URL}/assets/Żel_10.jpg`,
    `${process.env.PUBLIC_URL}/assets/Żel_11.jpg`,
    `${process.env.PUBLIC_URL}/assets/Hybryda_0.jpg`,
    `${process.env.PUBLIC_URL}/assets/Hybryda_1.jpg`,
    `${process.env.PUBLIC_URL}/assets/Hybryda_2.jpg`,
    `${process.env.PUBLIC_URL}/assets/Hybryda_3.jpg`,
    `${process.env.PUBLIC_URL}/assets/Hybryda_4.jpg`,
    `${process.env.PUBLIC_URL}/assets/Hybryda_5.jpg`,
    `${process.env.PUBLIC_URL}/assets/AkryloŻel_1.jpg`,
    `${process.env.PUBLIC_URL}/assets/AkryloŻel_2.jpg`,
    `${process.env.PUBLIC_URL}/assets/AkryloŻel_3.jpg`,
    `${process.env.PUBLIC_URL}/assets/1.jpeg`,
    `${process.env.PUBLIC_URL}/assets/2.jpeg`,
    `${process.env.PUBLIC_URL}/assets/3.jpeg`,
    `${process.env.PUBLIC_URL}/assets/4.jpeg`,
    `${process.env.PUBLIC_URL}/assets/5.jpeg`,
    `${process.env.PUBLIC_URL}/assets/6.jpeg`,
    `${process.env.PUBLIC_URL}/assets/7.jpeg`,
    `${process.env.PUBLIC_URL}/assets/8.jpeg`,
    `${process.env.PUBLIC_URL}/assets/9.jpeg`,
    `${process.env.PUBLIC_URL}/assets/10.jpeg`,
    `${process.env.PUBLIC_URL}/assets/11.jpeg`,
    `${process.env.PUBLIC_URL}/assets/12.jpeg`,
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
