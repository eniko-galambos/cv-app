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
      end: '+=2000',
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
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.3,
    },
  );
  tl.to('#profile-images', {
    scale: 1,
    opacity: 1,
    duration: 1,
  });
  tl.to('#profile-images', {
    scale: 1.1,
    opacity: 0,
    duration: 0.3,
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
        <img
          src={profileBack}
          className="absolute left-1/2 opacity-50 top-36 w-1/3"
          alt="Profile of me"
        ></img>
        <img
          src={profileFront}
          className="absolute left-1/3 top-8 w-1/4"
          alt="Profile of me"
        ></img>
      </div>
    </div>
  );
};

export default ProfileImages;
