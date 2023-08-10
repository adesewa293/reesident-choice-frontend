import React, { useState, Children, useRef } from 'react';
import './ImageCarousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Children.count(children) - 1 : prevIndex - 1));
    carouselRef.current.style.transition = 'transform 0.3s ease-in-out';
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Children.count(children) - 1 ? 0 : prevIndex + 1));
    carouselRef.current.style.transition = 'transform 0.3s ease-in-out';
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef} style={slideStyle}>
        {Children.map(children, (child, index) => (
          <div className="slide" key={index}>
            {child}
          </div>
        ))}
      </div>
      <button className="arrow-button prev-button" onClick={goToPrevious}>
        <FaChevronLeft />
      </button>
      <button className="arrow-button next-button" onClick={goToNext}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageCarousel;
