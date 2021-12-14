import React from 'react';
import PropTypes from 'prop-types';

const Arrow = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.25 64.33"
      width={props.w}
      height={props.h}
    >
      <path
        d="M72.41,14.56c.64,5.45-1,11.27-3.07,16.38a63.11,63.11,0,0,1-8.61,14.57C53.9,54.29,45.06,61,35.22,66.06a127.49,127.49,0,0,1-17.09,7.21c-.27.09.24,2.42,0,2.5,11.46-3.93,22.73-9.24,32.15-17,9.17-7.53,16.86-17.87,20.48-29.24a41.85,41.85,0,0,0,1.65-17.51c.1.82-.1,1.67,0,2.5Z"
        transform="translate(-16.45 -12.06)"
      />
      <path
        d="M26.16,58.8A76.8,76.8,0,0,1,16.5,73.89c-.15.19.09,2.5,0,2.5q7.93,0,15.84-.44c.06,0,0-2.5,0-2.5q-7.91.39-15.84.44v2.5A76.8,76.8,0,0,0,26.16,61.3a3.74,3.74,0,0,0,0-1.25c0-.31-.15-1,0-1.25Z"
        transform="translate(-16.45 -12.06)"
      />
    </svg>
  );
};

Arrow.propTypes = {
  w: PropTypes.number,
  h: PropTypes.number,
};

export default Arrow;
