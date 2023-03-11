import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Animation = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      {showAnimation && (
        <div className="animation">
          <Confetti />
        </div>
      )}
    </div>
  );
};

export default Animation;