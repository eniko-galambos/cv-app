import gsap from 'gsap';
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Education = () => {
  const items = [
    {
      when: '2007 – 2011',
      where: 'Szent István Secondary School, Kalocsa',
      faculty: 'Language class',
    },
    {
      when: '2011 – 2015',
      where: 'University of Szeged',
      faculty: 'Faculty of Science and Information Technology',
      what: 'Business Informatics Engineer BSc',
    },
    {
      when: '2015 – 2017',
      where: 'University of Szeged',
      faculty: 'Faculty of Science and Information Technology',
      what: 'Business Informatics Engineer MSc',
    },
  ];

  // Animations
  const moveFadedTitle = () => {
    gsap.fromTo(
      '#education-faded-title',
      { y: 50 },
      {
        y: -250,
        scrollTrigger: {
          trigger: '#education',
          toggleActions: 'restart pause reverse pause',
          start: 'top 100%',
          scrub: 0.4,
        },
      },
    );
  };

  const moveTimeline = () => {
    let container = document.getElementById('education-items');
    return gsap.fromTo(
      container,
      { x: 0 },
      {
        x: () =>
          -(container.scrollWidth - document.documentElement.clientWidth) +
          'px',
        ease: 'none',
        duration: 5,
      },
    );
  };

  const drawTimeline = () => {
    var path = document.querySelector('#education-path');
    var l = path.getTotalLength();

    gsap.set(path, { strokeDasharray: l });
    return gsap.fromTo(
      path,
      { strokeDashoffset: l },
      { strokeDashoffset: 0, ease: 'none', duration: 5 },
    );
  };

  // Hooks
  useEffect(() => {
    let container = document.getElementById('education-items');

    const tl = gsap
      .timeline()
      .add(moveTimeline(), '+0')
      .add(drawTimeline(), '+0');

    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      scrub: 1,
      end: () => `top+=${container.scrollWidth - window.innerWidth}px bottom`,
      pin: true,
      animation: tl,
    });

    moveFadedTitle();
  });

  return (
    <section id="education" className="overflow-x-hidden">
      <h2
        id="education-faded-title"
        className="font-newyork text-6xl md:text-7xl lg:text-9xl opacity-40 text-center py-36"
      >
        Education
      </h2>
      <div
        id="education-items"
        className="flex flex-col h-screen justify-center"
        style={{ width: innerWidth * (items.length + 1.5) }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 0 770 15.49">
          <path
            id="education-path"
            stroke="#0C0C0C"
            strokeWidth="0.2"
            fill="none"
            strokeMiterlimit="10"
            d="M11.84,38C17.35,36.23,25.17,32.63,33,31.6a131.38,131.38,0,0,1,26.39-.8c9.74.73,19,3,28.19,5s18.5,3.84,28.32,3.67c8.7-.14,16.77-1.82,24.7-3.88s15.71-4.53,23.85-6.25a140.81,140.81,0,0,1,25.43-2.92A145.26,145.26,0,0,1,215.63,28c3.26.51,6.48,1.13,9.74,1.64a72.29,72.29,0,0,0,9.92.94,70.25,70.25,0,0,0,9.2-.56c3-.36,6.06-.82,9.08-1.21,25.8-3.34,52-1.26,78.4,1.32s52.89,5.68,79.27,4.37c9.3-.47,18.46-1.47,27.57-2.62S457,29.46,466.13,28.4a521.2,521.2,0,0,1,69.38-3.31,512.12,512.12,0,0,1,68.83,5.84c12,1.84,24,4.13,36.08,5.73s24.3,2.52,36.61,1.64a195.74,195.74,0,0,0,28.8-4.69c9.37-2.1,18.65-4.42,28.29-6a126.85,126.85,0,0,1,30.46-1.46c10,.84,19,3.2,25.11,7.67"
            transform="translate(-11.69 -24.5)"
          />
        </svg>
        <div className="flex">
          {items.map((item, i) => {
            return (
              <div
                key={item.when}
                style={{
                  width: innerWidth,
                  marginLeft: i === 0 && innerWidth,
                  // marginRight: i === items.length - 1 && innerWidth / 2,
                }}
                className="h-full flex flex-col items-center justify-center"
              >
                <p className="font-newyork text-4xl mb-2">{item.when}</p>
                <p className="font-fashion mb-2">{item.where}</p>
                <p className="font-fashion text-sm text-gray-800">
                  {item.faculty}
                </p>
                <p className="font-fashion text-sm text-gray-800">
                  {item.what}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Education;
