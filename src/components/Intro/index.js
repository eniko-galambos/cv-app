import React from 'react';
import profileImg from '../../assets/images/profile.jpg';

const Intro = () => {
  return (
    <section className="relative">
      <div className="relative mt-60 mb-40 text-center w-full">
        <div className="absolute flex justify-center w-full -top-28 md:-top-16 lg:-top-24">
          <p className="font-newyork text-6xl md:text-7xl lg:text-9xl opacity-5">
            Frontend web developer
          </p>
        </div>
        <h2 className="font-newyork text-4xl">Frontend web developer</h2>
        <h3 className="font-fashion text-xs">(and hobby chef & artist)</h3>
      </div>
      <div className="bg-gray-100 py-60 ">
        <div className="relative flex flex-col items-center">
          <div
            className="w-1/2 md:w-1/3 lg:w-1/4"
            style={{ clipPath: 'circle(45%)' }}
          >
            <img
              id="profile-image-front"
              src={profileImg}
              alt="Profile of me"
            ></img>
          </div>
          <svg
            viewBox="0 0 240 240"
            className="absolute"
            style={{ height: '112%' }}
          >
            <defs>
              <path
                d="M98.31,60.9A39.14,39.14,0,1,0,139.14,100h0A39.15,39.15,0,0,0,100,60.86"
                id="profile-circle-text"
                transform="translate(20 7)"
              />
            </defs>
            <text dy="70" textLength="245">
              <textPath
                className="font-newyork text-xl"
                xlinkHref="#profile-circle-text"
              >
                Say cheese <tspan className="fill-spring-green">*</tspan> Say
                cheese <tspan className="fill-spring-green">*</tspan> Say cheese{' '}
                <tspan className="fill-spring-green">*</tspan>
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Intro;
