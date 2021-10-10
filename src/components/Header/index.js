import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  useEffect(() => {
    gsap.set('#title', {
      y: 10,
      x: 10,
    });

    gsap.from('#title', {
      x: -50,
      opacity: 0,
      duration: 1.5,
    });

    gsap.to('#title', {
      scale: 0.3,
      y: 0,
      scrollTrigger: {
        trigger: '#hero-tiles',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        start: 'top 0',
        pin: true,
      },
      transformOrigin: 'top left',
    });
  });

  return (
    <header className="fixed right-5 top-5 left-5 flex justify-between z-10">
      <h1 id="title" className="text-8xl font-extralight uppercase">
        Enikő Galambos
      </h1>
      <div className="flex">
        <p>HU</p>
        <p className="ml-2">Download</p>
      </div>
    </header>
  );
};

export default Header;
