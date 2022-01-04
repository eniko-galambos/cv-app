import React, { useEffect } from 'react';
import gsap from 'gsap';
import Arrow from '../../svg/Arrow';

const Hero = () => {
  // Animations
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#hero-title',
      toggleActions: 'play reset reset reset',
      start: 'top 1px',
      end: 'top -1px',
      once: true,
    },
  });
  const scrolltl = gsap.timeline({
    scrollTrigger: {
      trigger: '#hero-title',
      toggleActions: 'play none reverse reverse',
      start: 'top -5px',
    },
  });

  const revealTitle = () => {
    return gsap.from('#hero-title span', {
      opacity: 0,
      y: 70,
      skewX: -12,
      stagger: 0.3,
      duration: 0.7,
    });
  };

  const hideTitle = () => {
    return gsap.fromTo(
      '#hero-title span',
      {
        opacity: 1,
        x: 0,
      },
      {
        opacity: 0,
        x: -150,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power1.inOut',
      },
    );
  };

  const revealArrow = () => {
    return gsap.fromTo(
      '#hero-arrow',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
      },
    );
  };

  const hideArrow = () => {
    return gsap.fromTo(
      '#hero-arrow',
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.1,
      },
    );
  };

  const revealMeetMe = () => {
    return gsap.fromTo(
      '#hero-meet-me',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
      },
    );
  };

  const hideMeetMe = () => {
    return gsap.fromTo(
      '#hero-meet-me',
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.3,
      },
    );
  };

  const moveArrow = () => {
    return gsap.to('#hero-arrow', {
      rotate: -15,
      duration: 0.7,
      scaleY: 0.9,
      repeat: -1,
      yoyo: true,
    });
  };

  // Hooks
  useEffect(() => {
    scrolltl.add(hideMeetMe());
    scrolltl.add(hideArrow());
    scrolltl.add(hideTitle());

    gsap.set('#hero-arrow', {
      opacity: 0,
      rotate: -10,
    });
    gsap.set('#hero-meet-me', {
      opacity: 0,
    });

    tl.add(revealTitle);
    tl.add(revealArrow, '<1.2');
    tl.add(revealMeetMe, '>0.3');
    tl.add(moveArrow, '>1.2');
  });

  return (
    <section className="flex flex-col justify-center h-screen items-center">
      <div>
        <h1
          id="hero-title"
          className="flex flex-col font-newyork text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
          style={{ lineHeight: 0.85 }}
        >
          <span>Hi,</span>
          <span>my name is</span>
          <span>Enikő Galambos</span>
        </h1>
        <div className="flex flex-col items-end relative mt-3">
          <div id="hero-arrow" className="w-12 h-12 sm:w-16 sm:h-16">
            <Arrow />
          </div>
          <p
            id="hero-meet-me"
            className="mt-5 font-fashion text-sm sm:text-base absolute -bottom-9 right-9 sm:-bottom-12 sm:right-9"
          >
            meet me
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
