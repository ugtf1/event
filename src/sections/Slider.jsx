import React, { useState, useEffect, useRef } from 'react';
import './Slider.module.css';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = slides.length;
  const containerRef = useRef(null);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideCount]);

  const goTo = (index) => {
    setCurrentIndex((index + slideCount) % slideCount);
  };

  return (
    <div className="slider-wrapper" ref={containerRef}>
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div className="slide" key={idx}>
            <img className="slide-image" src={slide.image} alt={slide.title} />
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-text">{slide.description}</p>
              <a
                href={slide.buttonLink}
                className="slide-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        className="nav-button prev"
        onClick={() => goTo(currentIndex - 1)}
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
        className="nav-button next"
        onClick={() => goTo(currentIndex + 1)}
        aria-label="Next Slide"
      >
        ›
      </button>

      <div className="dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
