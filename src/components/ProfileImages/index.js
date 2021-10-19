import React, { useEffect } from 'react';
import profileFront from '../../assets/images/profile_front.jpg';
import profileBack from '../../assets/images/profile_back.jpg';
import { gsap } from 'gsap';

// Animations
const showAndHideImages = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#profile-images',
      start: 'top 0',
      end: '+=2500',
      pin: true,
      toggleActions: 'restart pause reverse pause',
      scrub: 0.35,
    },
  });

  tl.fromTo(
    '#profile-images',
    {
      scale: 0.9,
      opacity: 0,
      y: -10,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      y: 0,
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
      transformOrigin: 'center',
    },
    '<+=0',
  );
  tl.to(
    '#profile-image-front',
    {
      scale: 1.2,
      duration: 1,
      transformOrigin: 'center',
    },
    '<+=0',
  );
  tl.to('#profile-images', {
    scale: 1.2,
    opacity: 0,
    duration: 0.3,
    y: 10,
  });
};

// Hooks
const ProfileImages = () => {
  useEffect(() => {
    showAndHideImages();
  });

  return (
    <div id="profile">
      <div id="profile-images" className="relative h-96">
        <div
          className="absolute opacity-30 top-28 w-1/3"
          style={{ clipPath: 'inset(10px 10px)', left: '40%' }}
        >
          <img
            id="profile-image-back"
            src={profileBack}
            alt="Profile of me"
          ></img>
        </div>
        <div
          className="absolute left-1/3 top-8 w-1/4"
          style={{ clipPath: 'inset(10px 10px)' }}
        >
          <img
            id="profile-image-front"
            src={profileFront}
            alt="Profile of me"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ProfileImages;
