import React, { useState, useEffect } from "react";
import "./Slideshow.css";
import LadysingingImage from "../Images/Ladysinging.jpeg";
import MandancingImage from "../Images/mandancing.jpeg";
import LadyWearingGlassesImage from "../Images/Ladywearingglasses.jpeg";
import ManInHatImage from "../Images/maninhat.jpeg";

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: LadysingingImage,
      caption: "Image 1",
    },
    {
      url: MandancingImage,
      caption: "Image 2",
    },
    {
      url: LadyWearingGlassesImage,
      caption: "Image 3",
    },
    {
      url: ManInHatImage,
      caption: "Image 4",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      <div className="slideshow-images">
        <div className="image-container">
          <div className="image-item">
            <img
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].caption}
            />
            <div className="slideshow-caption">
              {images[currentImageIndex].caption}
            </div>
          </div>
        </div>
      </div>
      <div className="slideshow-controls">
        <button
          onClick={() =>
            setCurrentImageIndex(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            )
          }
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
