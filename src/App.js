import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Draggable } from 'gsap/Draggable';
import Header from './components/Header';
import Cursor from './components/Cursor';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(Draggable);

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

  return (
    <div onMouseMove={onMouseMove}>
      <Cursor ref={cursorRef}></Cursor>
      <Header />
      <main></main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
