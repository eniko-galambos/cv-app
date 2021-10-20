import React, { useEffect } from 'react';
import profileFront from '../../assets/images/profile_front.jpg';
import profileBack from '../../assets/images/profile_back.jpg';
import { gsap } from 'gsap';

// Animations
const showAndHideImages = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#personal-details',
      start: 'top 0',
      end: '+=2500',
      pin: true,
      toggleActions: 'restart pause reverse pause',
      scrub: 0.35,
    },
    transformOrigin: 'center',
  });

  tl.fromTo(
    '#profile-images',
    {
      scale: 0.9,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.4,
    },
  );
  tl.to('#profile-images', {
    scale: 1.1,
    duration: 1,
  });
  tl.to(
    '#profile-image-back',
    {
      scale: 1.3,
      duration: 1,
    },
    '<+=0',
  );
  tl.to(
    '#profile-image-front',
    {
      scale: 1.2,
      duration: 1,
    },
    '<+=0',
  );
  tl.to('#profile-images', {
    scale: 1.2,
    opacity: 0,
    duration: 0.4,
  });
};

// Hooks
const PersonalDetails = () => {
  useEffect(() => {
    showAndHideImages();
  });

  return (
    <section id="personal-details" className="pt-8 flex">
      <div className="flex-1 mt-16 ml-8">
        <h2 className="text-5xl font-extralight ">Personal details</h2>
      </div>
      <div id="profile-images" className="relative flex-1">
        <div
          className="absolute opacity-30 top-20 w-2/3 shadow-md"
          style={{ left: '25%' }}
        >
          <div style={{ clipPath: 'inset(0)' }}>
            <img
              id="profile-image-back"
              src={profileBack}
              alt="Profile of me"
            ></img>
          </div>
        </div>
        <div className="absolute w-1/2 shadow-md" style={{ left: '15%' }}>
          <div style={{ clipPath: 'inset(0)' }}>
            <img
              id="profile-image-front"
              src={profileFront}
              alt="Profile of me"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
