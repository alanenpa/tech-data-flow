import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import wide from '../assets/Wide graphic.png';
import spot from '../assets/Spot graphic.png';
import hybrid from '../assets/Hybrid graphic.png';
import './Informations.css';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = index => {
    setCurrentSlide(index);
    console.log(`Currently showing image at index ${index}`);
  };

  return (
    <Carousel infiniteLoop showThumbs={false} onChange={handleSlideChange}>
      <div>
        <img src={wide} alt="Wide" />
        <p className="legend">Wide</p>
      </div>
      <div>
        <img src={spot} alt="Spot" />
        <p className="legend">Spot</p>
      </div>
      <div>
        <img src={hybrid} alt="Hybrid" />
        <p className="legend">Hybrid</p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
