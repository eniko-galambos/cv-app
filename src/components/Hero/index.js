import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import HeroTiles from '../../svg/HeroTiles';

const Hero = () => {
  // Animations
  const highlightTilePiece = (event) => (direction) => {
    const target = event.target.closest('polygon');

    if (!target) {
      return;
    }

    if (direction === 'front') {
      gsap.fromTo(
        `#${target.id}`,
        {
          filter: 'brightness(100%)',
          webkitFilter: 'brightness(100%)',
        },
        {
          scale: 0.92,
          rotate: 1,
          filter: 'brightness(92%)',
          webkitFilter: 'brightness(92%)',
          transformOrigin: 'center',
        },
      );
    } else {
      gsap.to(`#${target.id}`, {
        scale: 1,
        rotate: 0,
        opacity: 1,
        filter: 'none',
      });
    }
  };

  const flyTiles = () => {
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
  };

  const onScroll = () => {
    gsap.to('#hero-tile-1', {
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
  };

  // Hooks
  useEffect(() => {
    onScroll();
    flyTiles();
  });

  return (
    <div>
      <HeroTiles highlightTilePiece={highlightTilePiece} />
      <div className="flex justify-center">
        <p>Scroll down</p>
      </div>
    </div>
  );
};

export default Hero;
