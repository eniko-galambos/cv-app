import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Draggable } from 'gsap/Draggable';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import LocomotiveScroll from 'locomotive-scroll';
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
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector('.smooth-scroll'),
      smooth: true,
    });

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('.smooth-scroll', {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector('.smooth-scroll').style.transform
        ? 'transform'
        : 'fixed',
    });

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();
  });

  useEffect(() => {
    if (cursorRef.current && cursorRef.current != null) {
      cursorRef.current.init();
    }
  }, [cursorRef]);

  return (
    <div onMouseMove={onMouseMove}>
      <Cursor ref={cursorRef}></Cursor>
      <Header />
      <main className="smooth-scroll">
        <Hero />
        <Intro />
        <WhoAmI />
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
