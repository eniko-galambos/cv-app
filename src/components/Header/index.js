import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  return (
    <header className="fixed right-5 top-5 left-5 flex justify-between z-10">
      <a href="#" className="font-newyork">
        Enikő Galambos
      </a>
    </header>
  );
};

export default Header;
