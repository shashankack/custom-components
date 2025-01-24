// Usage of this component:
// <ImageSlider images={images} content={content} />

// Import the SCSS file
import './ImageSlider.scss';


import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

const ImageSlider = ({ images, content }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const images = slider.querySelectorAll('img');

    const animateSlider = () => {
      const direction = Math.random() > 0.5 ? 'top' : 'bottom';
      const nextIndex = (currentIndex + 1) % images.length;

      gsap.fromTo(images[nextIndex], 
        { y: direction === 'top' ? '-100%' : '100%', opacity: 1 },
        { 
          y: '0%', 
          opacity: 1, 
          duration: 1, 
          ease: "elastic.out(1,1)",
        }
      );

      gsap.to(images[currentIndex], 
        { 
          y: direction === 'top' ? '100%' : '-100%', 
          opacity: 0, 
          duration: 1, 
          ease: "elastic.out(1,1)",
        }
      );

      setCurrentIndex(nextIndex);
    };

    const interval = setInterval(animateSlider, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="container">
      <div ref={sliderRef} className="slider-section">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <div className="content-section">
        {content}
      </div>
    </div>
  );
};

export default ImageSlider;