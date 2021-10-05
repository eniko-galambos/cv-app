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
          rotate: -1,
          filter: 'brightness(92%)',
          webkitFilter: 'brightness(92%)',
          transformOrigin: 'center',
        },
      );
    } else {
      gsap.to(`#${target.id}`, {
        rotate: 0,
        filter: 'none',
      });
    }
  };

  const onScroll = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero-tiles',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        start: 'top 0',
        pin: true,
      },
    });

    for (let index = 1; index <= 6; index++) {
      tl.to(
        `.hero-tile-piece-${index}`,
        {
          stagger: 0.03,
          scale: 0.7,
          opacity: 0,
          transformOrigin: 'center',
        },
        '>-=90%',
      );
    }
  };

  const fallTiles = (tl) => {
    tl.fromTo(
      `.hero-tile`,
      {
        opacity: 0,
      },
      {
        opacity: 0.8,
        duration: 1.5,
      },
    );
    tl.from(
      `.hero-tile`,
      {
        y: -20,
        duration: 3,
        stagger: 0.08,
        ease: 'elastic.out(1, 0.3)',
      },
      '<+=0',
    );
  };

  const flyTiles = (tl) => {
    for (let index = 1; index <= 6; index++) {
      tl.to(`#hero-tile-${index}`, {
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

  // Hooks
  useEffect(() => {
    onScroll();

    const tl = gsap.timeline();
    fallTiles(tl);
    flyTiles(tl);
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
