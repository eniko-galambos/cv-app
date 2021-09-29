import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroTiles from './svg/HeroTiles';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    gsap.to('#hero-tiles', {
      x: 300,
      duration: 3,
      scrollTrigger: {
        trigger: '#hero-tiles',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        start: 'top 0',
        pin: true,
      },
    });

    for (let index = 1; index <= 6; index++) {
      gsap.to(`#hero-tile-${index}`, {
        scale: 1.005,
        y: -10,
        x: -index,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: -index / 2,
      });
    }
  });

  return (
    <div>
      <div className="fixed right-2 top-2 flex">
        <p className="m-2">HU</p>
        <p className="m-2">Download</p>
      </div>
      <HeroTiles />
      <div className="flex justify-center">
        <p>Scroll down</p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
