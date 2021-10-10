import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Header from './components/Header';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
