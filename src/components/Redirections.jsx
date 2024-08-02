import React, { useEffect } from 'react';

const Redirections = () => {
  useEffect(() => {
    // Redirect to Google when the component mounts
    window.location.href = 'https://wa.me/+918431067893';
  }, []); // Empty dependency array ensures this runs only once on mount

  return <div></div>;
};

export default Redirections;
