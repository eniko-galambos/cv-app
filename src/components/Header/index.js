import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  // Animations
  const floatTitle = () => {
    gsap.from('#title', {
      x: -50,
      opacity: 0,
      duration: 1.5,
    });
  };

  const lowerTitle = () => {
    gsap.to('#title', {
      scale: 0.4,
      y: 0,
      scrollTrigger: {
        trigger: '#hero-tiles',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        start: 'top 0',
        end: '+=3000',
        pin: true,
      },
      transformOrigin: 'top left',
    });
  };

  const hoverTitle = (direction) => {
    if (direction === 'front') {
      gsap.to('#title-line', {
        scaleX: 2,
        transformOrigin: 'left',
        duration: 0.2,
      });
      gsap.to('#title-label', {
        color: '#14142d',
        opacity: 0.7,
        duration: 0.2,
      });
    } else {
      gsap.to('#title-line', {
        scaleX: 1,
        duration: 0.2,
      });
      gsap.to('#title-label', {
        color: 'black',
        opacity: 1,
        duration: 0.2,
      });
    }
  };

  // Hooks
  useEffect(() => {
    gsap.set('#title', {
      y: 10,
      x: 10,
    });

    floatTitle();
    lowerTitle();
  });

  return (
    <header className="fixed right-5 top-5 left-5 flex justify-between z-10">
      <div id="title">
        <a
          onMouseOver={() => hoverTitle('front')}
          onFocus={() => hoverTitle('front')}
          onMouseOut={() => hoverTitle('back')}
          onBlur={() => hoverTitle('back')}
          href="#"
        >
          <h1 id="title-label" className="text-8xl cursor-pointer font-janetta">
            Enikö Galambos
          </h1>
        </a>
        <div id="title-line" className="h-0.5 w-20 bg-black mt-1"></div>
      </div>
      <div className="flex">
        <p>HU</p>
        <p className="ml-2">Download</p>
      </div>
    </header>
  );
};

export default Header;
