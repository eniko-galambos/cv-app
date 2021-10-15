import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Header from './components/Header';
import ProfileImages from './components/ProfileImages';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProfileImages />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
