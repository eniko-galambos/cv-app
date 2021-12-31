import gsap from 'gsap';
import React, { useEffect } from 'react';
import profileImg from '../../assets/images/profile.jpg';

const Intro = () => {
  const titleScrolltl = gsap.timeline({
    scrollTrigger: {
      trigger: '#intro',
      toggleActions: 'play none none none',
      start: 'center 90%',
    },
  });

  // Animations
  const revealTitle = () => {
    return gsap.from('#intro-title', {
      y: 60,
      opacity: 0,
      duration: 1,
    });
  };

  const revealSubtitle = () => {
    return gsap.from('#intro-subtitle', {
      y: 60,
      opacity: 0,
      duration: 1,
    });
  };

  const moveFadedTitle = () => {
    gsap.fromTo(
      '#intro-faded-title',
      { y: 150 },
      {
        y: -150,
        scrollTrigger: {
          trigger: '#intro',
          toggleActions: 'restart pause reverse pause',
          start: 'top 100%',
          scrub: 0.4,
        },
      },
    );
  };

  const rotateImageText = () => {
    gsap.to('#profile-image-text', {
      rotate: 360,
      duration: 40,
      transformOrigin: 'center',
      ease: 'none',
      repeat: -1,
    });
  };

  const scaleImage = () => {
    gsap.to('#profile-image', {
      scale: 1.3,
      duration: 1,
      scrollTrigger: {
        trigger: '#intro',
        start: '60% 100%',
        toggleActions: 'restart pause reverse pause',
        scrub: 0.3,
      },
      transformOrigin: 'center',
    });
  };

  // Hooks
  useEffect(() => {
    titleScrolltl.add(revealTitle());
    titleScrolltl.add(revealSubtitle(), 0.5);

    moveFadedTitle();
    rotateImageText();
    scaleImage();
  });

  return (
    <section id="intro" className="relative">
      <div className="relative mt-60 mb-40 text-center w-full">
        <div className="absolute flex justify-center w-full -top-28 md:-top-16 lg:-top-24">
          <p
            id="intro-faded-title"
            className="font-newyork text-6xl md:text-7xl lg:text-9xl opacity-5"
          >
            Frontend web developer
          </p>
        </div>
        <h2 id="intro-title" className="font-newyork text-4xl">
          Frontend web developer
        </h2>
        <h3 id="intro-subtitle" className="font-fashion text-xs">
          (and hobby chef & artist)
        </h3>
      </div>
      <div className="bg-gray-100 py-60 ">
        <div className="relative flex flex-col items-center">
          <div
            className="w-1/2 md:w-1/3 lg:w-1/4 mt-2 sm:mt-3 md:mt-4 lg:mt-5"
            style={{ clipPath: 'circle(42%)' }}
          >
            <img id="profile-image" src={profileImg} alt="Profile of me"></img>
          </div>
          <svg viewBox="0 0 240 240" className="absolute h-full">
            <defs>
              <path
                d="M98.31,60.9A39.14,39.14,0,1,0,139.14,100h0A39.15,39.15,0,0,0,100,60.86"
                id="profile-circle-text"
                transform="translate(20 25)"
              />
            </defs>
            <text dy="70" textLength="247" id="profile-image-text">
              <textPath
                className="font-newyork text-2xl"
                xlinkHref="#profile-circle-text"
              >
                Say cheese <tspan className="fill-spring-green">*</tspan> Say
                cheese <tspan className="fill-spring-green">*</tspan> Say cheese{' '}
                <tspan className="fill-spring-green">*</tspan>
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Intro;
