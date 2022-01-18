import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Draggable } from 'gsap/Draggable';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Scrollbar from 'smooth-scrollbar';
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
    const scroller = document.querySelector('.scroller');

    const bodyScrollBar = Scrollbar.init(scroller, {
      delegateTo: document,
    });

    ScrollTrigger.scrollerProxy('.scroller', {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: scroller });

    // Only necessary to correct marker position - not needed in production
    if (document.querySelector('.gsap-marker-scroller-start')) {
      const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

      bodyScrollBar.addListener(({ offset }) => {
        gsap.set(markers, { marginTop: -offset.y });
      });
    }
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
      <main className="scroller h-screen">
        <Hero />
        <Intro />
        <WhoAmI />
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
