import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Draggable } from 'gsap/Draggable';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import WhoAmI from './components/WhoAmI';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  const cursorRef = useRef();

  // Methods
  const onMouseMove = (event) => {
    cursorRef.current.moveCircle(event);
  };

  // Hooks
  useEffect(() => {
    if (cursorRef.current && cursorRef.current != null) {
      cursorRef.current.init();
    }
  }, [cursorRef]);

  useEffect(() => {
    const container = document.querySelector('#scroll-container');

    let height;

    const setHeight = () => {
      height = container.clientHeight;
      document.body.style.height = height + 'px';
    };

    ScrollTrigger.addEventListener('refreshInit', setHeight);

    gsap.to(container, {
      y: () => -(height - document.documentElement.clientHeight),
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <div onMouseMove={onMouseMove}>
      <Cursor ref={cursorRef}></Cursor>
      <Header />
      <div
        id="viewport"
        className="overflow-hidden fixed w-full h-full top-0 left-0 right-0 bottom-0"
      >
        <main id="scroll-container" className="absolute overflow-hidden w-full">
          <Hero />
          <Intro />
          <WhoAmI />
        </main>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
