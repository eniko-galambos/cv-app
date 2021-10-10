import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import HeroTiles from '../../svg/HeroTiles';
import Arrow from '../../svg/Arrow';

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
          filter: 'brightness(92%)',
          webkitFilter: 'brightness(92%)',
          transformOrigin: 'center',
        },
      );
    } else {
      gsap.to(`#${target.id}`, {
        filter: 'none',
      });
    }
  };

  const explodeTiles = () => {
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

  const revealScrollDown = () => {
    const tl = gsap.timeline();

    tl.set('#scroll-down', {
      opacity: 0,
      duration: 2,
    });
    tl.fromTo(
      '#scroll-down',
      {
        y: -10,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: 2,
      },
    );
  };

  const hideScrollDown = () => {
    gsap.fromTo(
      '#scroll-down',
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#title',
          start: 'top 0',
        },
      },
    );
  };

  // Hooks
  useEffect(() => {
    revealScrollDown();
    hideScrollDown();
    explodeTiles();

    const tl = gsap.timeline();
    fallTiles(tl);
    flyTiles(tl);
  });

  return (
    <div>
      <HeroTiles highlightTilePiece={highlightTilePiece} />
      <div
        id="scroll-down"
        className="fixed bottom-8 left-8 flex flex-col items-center"
      >
        <p className="font-janetta text-4xl mb-4">Scroll down</p>
        <div className="w-4 h-4 animate-bounce">
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Hero;
