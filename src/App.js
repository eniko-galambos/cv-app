import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <div className="fixed right-2 top-2 flex">
        <p className="m-2">HU</p>
        <p className="m-2">Download</p>
      </div>
      <Hero />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
