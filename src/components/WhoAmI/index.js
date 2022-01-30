import gsap from 'gsap';
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSmoothScroller } from '../../utils';

const WhoAmI = () => {
  // Animations
  const movePanels = () => {
    gsap.utils.toArray('.panel').forEach((panel, i) => {
      gsap.fromTo(
        `#panel-${i + 1}`,
        { y: 0 },
        {
          y: innerHeight,
          scrollTrigger: {
            trigger: panel,
            scrub: true,
            start: 'top top',
            toggleActions: 'restart pause reverse pause',
          },
          ease: 'none',
        },
      );

      const fadeInQuote = () => {
        return gsap.fromTo(
          `#quote-${i + 1}`,
          { opacity: 0, y: 0 },
          {
            opacity: 1,
            y: innerHeight / 2,
            ease: 'none',
          },
        );
      };

      const fadeOutQuote = () => {
        return gsap.fromTo(
          `#quote-${i + 1}`,
          { opacity: 1, y: innerHeight / 2 },
          {
            opacity: 0,
            y: innerHeight,
            ease: 'none',
          },
        );
      };

      const tl = gsap
        .timeline()
        .add(fadeInQuote(), '+0')
        .add(fadeOutQuote(), '+0.5');

      ScrollTrigger.create({
        trigger: `#panel-${i + 1}`,
        start: 'top top',
        end: 'bottom top',
        toggleActions: 'restart pause reverse pause',
        scrub: true,
        animation: tl,
      });
    });
  };

  // Hooks
  useEffect(() => {
    initSmoothScroller();
    movePanels();
  });

  return (
    <section className="bg-black bg-opacity-90">
      <h2 className="font-newyork text-white text-6xl md:text-7xl lg:text-9xl opacity-40 text-center py-36">
        Who am I?
      </h2>
      <div className="w-screen flex">
        <div id="who-col-1" className="flex-1">
          <div className="w-full h-screen flex">
            <div className="flex-1 mt-20">
              <p
                id="quote-1"
                className="font-newyork text-white text-3xl md:text-5xl lg:text-7xl px-5 lg:px-20"
              >
                &quot;Always positive, who sees the difficulties as
                challenges.&quot;
              </p>
            </div>
          </div>
          <div className="w-full h-screen flex">
            <div className="flex-1 mt-20">
              <p
                id="quote-2"
                className="font-newyork text-white text-3xl md:text-5xl lg:text-7xl px-5 lg:px-20"
              >
                &quot;Curious, who always wants to understand everything.&quot;
              </p>
            </div>
          </div>
          <div className="w-full h-screen flex">
            <div className="flex-1 mt-20">
              <p
                id="quote-3"
                className="font-newyork text-white text-3xl md:text-5xl lg:text-7xl px-5 lg:px-20"
              >
                &quot;Who is always eager to learn, and aspire to develop
                herself.&quot;
              </p>
            </div>
          </div>
          <div className="w-full h-screen flex">
            <div className="flex-1 mt-20">
              <p
                id="quote-4"
                className="font-newyork text-white text-3xl md:text-5xl lg:text-7xl px-5 lg:px-20"
              >
                &quot;Curious, who always wants to understand everything.&quot;
              </p>
            </div>
          </div>
        </div>
        <div id="who-col-2" className="flex-1">
          <div id="panel-1" className="panel w-full h-screen flex">
            <div className="flex-1 bg-vivid-red bg-opacity-80"></div>
          </div>
          <div id="panel-2" className="panel w-full h-screen flex">
            <div className="flex-1 bg-me-madeira bg-center"></div>
          </div>
          <div id="panel-3" className="panel w-full h-screen flex">
            <div className="flex-1 bg-spring-green"></div>
          </div>
          <div id="panel-4" className="panel w-full h-screen flex">
            <div className="flex-1 bg-gray-50"></div>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen flex">
        <div className="flex-1"></div>
        <div className="flex-1 bg-gray-50"></div>
      </div>
    </section>
  );
};

export default WhoAmI;
