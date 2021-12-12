import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  return (
    <header className="fixed right-5 top-5 left-5 flex justify-between z-10">
      <a href="#" className="font-newyork relative">
        <span className="text-3xl absolute">Enikő</span>
        <span className="text-xl absolute top-5 left-5">Galambos</span>
      </a>
    </header>
  );
};

export default Header;
