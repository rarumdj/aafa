import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const PressReview = () => {
    const { pathname } = useLocation();

  useEffect(() => {
    window.location.replace(
      "https://www.designindaba.com/articles/interviews/how-re-roll-station-helping-african-fashion-entrepreneurs-launch-their-brands",
    );
    // window.open('https://yunometa.com/', '_blank', 'noopener,noreferrer');
  }, [pathname]);

  return (
    <div>PressReview</div>
  )
}

export default PressReview