import gsap from 'gsap';
import React, { useEffect } from 'react';

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
            scrub: 1,
            toggleActions: 'restart pause reverse pause',
          },
        },
      );

      gsap.fromTo(
        `#quote-${i + 1}`,
        { y: 3 * innerHeight },
        {
          y: 1.5 * innerHeight,
          scrollTrigger: {
            trigger: `#panel-${i + 1}`,
            start: 'top bottom',
            end: 'bottom bottom',
            toggleActions: 'restart pause reverse pause',
            scrub: 1,
          },
        },
      );

      gsap.set(`#quote-${i + 1}`, { opacity: 0 });

      gsap.fromTo(
        `#quote-${i + 1}`,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: `#panel-${i + 1}`,
            start: 'bottom bottom',
            toggleActions: 'restart pause reverse pause',
            duration: 1.5,
          },
        },
      );
    });
  };

  // Hooks
  useEffect(() => {
    movePanels();
  });

  return (
    <section className="bg-black bg-opacity-90">
      <h2 className="font-newyork text-white text-6xl md:text-7xl lg:text-9xl opacity-40 text-center py-16">
        Who am I?
      </h2>
      <div className="w-screen flex">
        <div id="who-col-1" className="flex-1">
          <div className="w-full h-screen flex">
            <div className="flex-1">
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
            <div className="flex-1">
              <p
                id="quote-2"
                className="font-newyork text-white text-3xl md:text-5xl lg:text-7xl px-5 lg:px-20"
              >
                &quot;Curious, who always wants to understand everything.&quot;
              </p>
            </div>
          </div>
          <div className="w-full h-screen flex">
            <div className="flex-1">
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
            <div className="flex-1">
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
      <div className="h-screen w-screen"></div>
    </section>
  );
};

export default WhoAmI;
