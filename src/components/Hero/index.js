import React from 'react';

const Hero = () => {
  return (
    <section className="flex justify-center h-screen items-center">
      <h1
        className="font-newyork text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
        style={{ lineHeight: 0.85 }}
      >
        Hi, <br /> my name is <br /> Enikő Galambos
      </h1>
    </section>
  );
};

export default Hero;
