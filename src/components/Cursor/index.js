import React, { useImperativeHandle, forwardRef } from 'react';
import gsap from 'gsap';

const Cursor = forwardRef(function Cursor(props, ref) {
  // Animations
  const moveCircle = (e) => {
    gsap.to('#cursor-cicle', {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
    });
    gsap.to('#cursor-cicle-follow', {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
    });
  };

  const hoverItem = () => {
    gsap.to('#cursor-cicle', {
      opacity: 1,
      scale: 0.5,
      duration: 0.3,
    });
    gsap.to('#cursor-cicle-follow', {
      scale: 2,
      duration: 0.3,
    });
  };

  const unhoverItem = () => {
    gsap.to('#cursor-cicle', {
      opacity: 1,
      scale: 1,
      duration: 0.3,
    });
    gsap.to('#cursor-cicle-follow', {
      scale: 1,
      duration: 0.3,
    });
  };

  const init = () => {
    const interactiveElements = document.querySelectorAll('a');

    interactiveElements.forEach((element) => {
      element.style.cursor = 'none';
      element.addEventListener('mouseenter', hoverItem);
      element.addEventListener('mouseleave', unhoverItem);
    });
  };

  // Hooks
  useImperativeHandle(ref, () => ({
    moveCircle: (event) => {
      moveCircle(event);
    },
    init: () => {
      init();
    },
  }));

  return (
    <div ref={ref}>
      <div
        id="cursor-cicle-follow"
        className="fixed pointer-events-none bg-vivid-red bg-opacity-10 w-12 h-12 -left-6 -top-6 rounded-full z-50"
      ></div>
      <div
        id="cursor-cicle"
        className="fixed pointer-events-none bg-vivid-red bg-opacity-90 w-3 h-3 -left-1.5 -top-1.5 rounded-full z-50"
      ></div>
    </div>
  );
});

export default Cursor;
