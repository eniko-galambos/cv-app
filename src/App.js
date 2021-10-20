import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Header from './components/Header';
import PersonalDetails from './components/PersonalDetails';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <main>
        <PersonalDetails />
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
