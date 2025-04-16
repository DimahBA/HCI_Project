import React, { useEffect, useState } from "react";

export default function Timer() {
    const timerDuration = 1;

      const [time, setTime] = useState(timerDuration * 60);
    
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div>
      {time === 0 ? (
        <p className="text-lg">Should arrive soon...</p>
      ) : (
        <p className="text-3xl">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      )}
    </div>
  );
}
