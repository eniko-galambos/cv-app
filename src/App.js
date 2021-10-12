import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Header from './components/Header';
import profileFront from './assets/images/profile_front.jpg';
import profileBack from './assets/images/profile_back.jpg';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div id="#images" className="relative">
        <img
          src={profileBack}
          className="absolute left-48 opacity-50"
          alt="Profile of me"
          style={{ width: 700 }}
        ></img>
        <img
          src={profileFront}
          className="absolute left-72 -top-28"
          alt="Profile of me"
          style={{ width: 500 }}
        ></img>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
