import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  // Animations
  const revealLogo = () => {
    gsap.fromTo(
      '#logo',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      },
    );
  };

  const revealMenuButton = () => {
    gsap.fromTo(
      '#menu-button',
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        transformOrigin: 'center',
        ease: 'back.out(1.7)',
      },
    );
  };

  const hideMenuButton = () => {
    gsap.fromTo(
      '#menu-button',
      {
        opacity: 1,
        scale: 1,
      },
      {
        opacity: 0,
        scale: 0.5,
        duration: 0.2,
      },
    );
  };

  const revealNav = () => {
    gsap.fromTo(
      '#menu-nav',
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        display: 'flex',
        duration: 0.4,
        transformOrigin: 'center',
      },
    );
    gsap.fromTo(
      '#menu-nav a',
      {
        opacity: 0,
        y: 20,
        skewX: -12,
      },
      {
        opacity: 1,
        y: 0,
        skewX: 0,
        stagger: 0.08,
        duration: 0.35,
      },
    );
  };

  const hideNav = () => {
    gsap.fromTo(
      '#menu-nav',
      {
        opacity: 1,
        scale: 1,
      },
      {
        opacity: 0,
        scale: 0.8,
        display: 'none',
        duration: 0.3,
      },
    );
  };

  const drawDivider = (event) => {
    gsap.fromTo(
      event.target.querySelector('hr'),
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        transformOrigin: 'top left',
        duration: 0.4,
      },
    );
  };

  const hideDivider = (event) => {
    gsap.fromTo(
      event.target.querySelector('hr'),
      {
        scaleX: 1,
      },
      {
        scaleX: 0,
        transformOrigin: 'top right',
        duration: 0.4,
      },
    );
  };

  // Hooks
  useEffect(() => {
    gsap.set('#menu-nav a hr', {
      scaleX: 0,
    });
    gsap.set('#menu-nav', {
      opacity: 0,
      display: 'none',
    });

    revealLogo();
    revealMenuButton();
  });

  return (
    <header className="fixed right-5 top-5 left-5 flex justify-between z-10">
      <a id="logo" href="#" className="font-newyork relative">
        <span className="text-3xl absolute">Enikő</span>
        <span className="text-xl absolute top-5 left-5">Galambos</span>
      </a>
      <div
        id="menu"
        className="relative"
        onMouseEnter={() => {
          hideMenuButton();
          revealNav();
        }}
        onMouseLeave={() => {
          revealMenuButton();
          hideNav();
        }}
      >
        <button
          id="menu-button"
          type="button"
          className="absolute top-0 right-0 font-fashion text-xs uppercase rounded-full bg-vivid-red py-5 px-2 shadow-md"
        >
          Menu
        </button>
        <nav
          id="menu-nav"
          className="absolute top-0 right-0 bg-black flex flex-col text-white font-fashion text-sm shadow-md p-8 rounded-3xl"
        >
          <a
            href="#"
            className="mb-3"
            onMouseOver={drawDivider}
            onMouseOut={hideDivider}
          >
            who am I?
            <hr className="bg-white h-px w-full" />
          </a>
          <a
            href="#"
            className="mb-3"
            onMouseOver={drawDivider}
            onMouseOut={hideDivider}
          >
            education
            <hr className="bg-white h-px w-full" />
          </a>
          <a
            href="#"
            className="mb-3"
            onMouseOver={drawDivider}
            onMouseOut={hideDivider}
          >
            workplace
            <hr className="bg-white h-px w-full" />
          </a>
          <a
            href="#"
            className="mb-3"
            onMouseOver={drawDivider}
            onMouseOut={hideDivider}
          >
            skills
            <hr className="bg-white h-px w-full" />
          </a>
          <a
            href="#"
            className="mb-3"
            onMouseOver={drawDivider}
            onMouseOut={hideDivider}
          >
            languages
            <hr className="bg-white h-px w-full" />
          </a>
          <a href="#" onMouseOver={drawDivider} onMouseOut={hideDivider}>
            contact
            <hr className="bg-white h-px w-full" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
