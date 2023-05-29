import React, { useState } from 'react';
import {BsArrowRightShort} from "react-icons/bs"
import {BsArrowLeftShort} from "react-icons/bs"

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-64 w-4/5">
      <button
        className="absolute left-4 transform -translate-y-1/2 bg-red-600 text-white rounded-full px-3 py-1 top-1/2"
        onClick={prevImage}
      >
        <BsArrowLeftShort className="w-6 h-6"/>
      </button>

      <div className='w-full h-60 object-cover'>

      <img
        className="mx-auto transition-opacity duration-1000 w-full h-full rounded-lg object-cover"
        src={images[currentImage]}
        alt={`Image ${currentImage}`}
        style={{ opacity: 1 }}
        onLoad={() => {
          const imagesList = Array.from(
            document.querySelectorAll('.carousel-image')
          );
          imagesList.forEach((img, index) => {
            if (index !== currentImage) {
              img.style.opacity = 0;
            }
          });
        }}
      />
      </div>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-600 text-white rounded-full px-3 py-1"
        onClick={nextImage}
      >
        <BsArrowRightShort className='w-6 h-6'/>
      </button>
    </div>
  );
};

export default Carousel;
